fetch('https://raw.githubusercontent.com/ScripterSaurav/Public/main/Notify/message.html')
      .then(response => response.text())
      .then(html => {
        document.getElementById('weBmessage').innerHTML = html;
      })
      .catch(error => {
        console.error('Error', error);
      });
