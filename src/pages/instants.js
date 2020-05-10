import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import axios from 'axios'


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
  const [data, setData] = useState({commands: [], response: ''});

  useEffect(() => {
    axios.get('http://api.ncurl.sh/api/instants/' + id).then(result => {
      console.log('result', result);
      setData({...result.data})
    });
  }, ['id']);
  return (
    <Layout title="Share">
      <div>
          <pre>
            {data.commands.join(' ')}
          </pre>
          <pre>
            {data.response}
          </pre>
      </div>
    </Layout>
  );
}

export default Instant;