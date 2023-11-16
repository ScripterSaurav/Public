function redirectToMainSite() {
  setTimeout(function() {
    window.location.href = 'https://www.webcoderhub.tk';
  }, 1000);
}
fetch('https://raw.githubusercontent.com/ScripterSaurav/Public/main/Notify/message.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text();
  })
  .then(html => {
    const webMessageElement = document.getElementById('weBmessage');
    if (!webMessageElement) {
      alert('⚠️ Movie Post Generator Tool✍ (Alert). You Tried To Remove the code From Post. You will be redirected in 1 second To Main Site.  HOW TO FIX:-  1️⃣.  Restore The Code You Removed. 2️⃣.  Go To The Website And Generate The Code Again.  Thanks ❤ Team WebCoderHub');
      redirectToMainSite();
    } else {
      webMessageElement.innerHTML = html;
    }
  })
  .catch(error => {
    console.error('Error', error);
    alert('Error.You will be redirected in 1 second.'); 
    redirectToMainSite(); 
  });
