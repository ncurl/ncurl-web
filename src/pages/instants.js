import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import axios from 'axios'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function getJsonFromUrl(url) {
  var query = url.substr(1);
  var result = {};
  query.split("&").forEach(function(part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}


function Instant(props) {
  console.log('props', props)
  const { id } = getJsonFromUrl(props.location.search)
  const [data, setData] = useState({commands: [], contents: ''});

  useEffect(() => {
    axios.get('https://ncurl-server.herokuapp.com/api/instants/' + id).then(result => {
      console.log('result', result);
      setData({...result.data})
    });
  }, ['id']);
  return (
    <Layout title="Share">
      <div>
          <SyntaxHighlighter language="bash" style={docco}>
            {data.commands.join(' ')}
          </SyntaxHighlighter>
          {
            data.contents && data.contents.map((content, index) => (<SyntaxHighlighter language={content.highlightName} style={docco} key={index}>
            {content.content}
          </SyntaxHighlighter>))
          }
          
      </div>
    </Layout>
  );
}

export default Instant;