import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import axios from 'axios'
import JSONTree from 'react-json-tree'
import Highlight from '@theme/CodeBlock';
import useThemeContext from '@theme/hooks/useThemeContext'; 


function getJsonFromUrl(url) {
  var query = url.substr(1);
  var result = {};
  query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}

function prettyCurl(commands) {
  commands = decodeURIComponent(commands)
  commands = commands.replace(/ -H '/g, ' \\\n-H \'')
  commands = commands.replace(/--data-binary/, '\n--data-binary')
  commands = commands.replace(/--data/, '\n--data')
  return commands ? `$ ${commands}` : ""
}

const theme = {
  scheme: 'monokai',
  author: 'wimer hazenberg (http://www.monokai.nl)',
  base00: '#272822',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633'
};


function Instant(props) {
  console.log('props', props)
  const { id } = getJsonFromUrl(props.location.search)
  const [data, setData] = useState({commands: [], contents: [], bodyCommand: null});
  const {isDarkTheme} = useThemeContext();
  console.log('isDarkTheme', isDarkTheme)

  useEffect(() => {
    axios.get('https://ncurl-server.herokuapp.com/api/instants/' + id).then(result => {
      console.log('result', result);
      const bodyCommand = result.data.contents.find(content => content.highlightName == 'json')
      setData({bodyCommand, ...result.data})
    });
  }, ['id', 'isDarkTheme']);
  return data.bodyCommand ? (
    <Layout title="Share">
      <div>
        <div className="row row-block">
          <div className="col col--6 command-div">
            <Highlight language="bash">
              {prettyCurl(data.commands)}
            </Highlight>
            <Highlight>
              {data.contents.map(content => content.content).join('\n\n')}
            </Highlight>
          </div>
          <div className="col col--5 div-block">
            <JSONTree data={JSON.parse(data.bodyCommand.content)} theme={theme} invertTheme={!isDarkTheme} />
          </div>
          <div className="col col--1 div-block"></div>
        </div>
          
      </div>
    </Layout>
  ) : (
    <Layout title="Share">
      <div>
        <div className="row row-block">
          <div className="col col--6 div-block">
            <Highlight language="bash">
              {prettyCurl(data.commands)}
            </Highlight>
            <Highlight>
              {data.contents.map(content => content.content).join('\n\n')}
            </Highlight>
          </div>
          <div className="col col--1 row-block"></div>
        </div>
          
      </div>
    </Layout>
  );
}

export default Instant;