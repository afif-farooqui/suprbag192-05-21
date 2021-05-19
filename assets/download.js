var links = [
  'assets/img/SuprBag PitchDeck.pdf',
  'assets/img/SuprBag PPT.pptx',
  'assets/img/SuprBag - In-Cab Branding.pptx.pdf'
];

function downloadAll(urls) {
  var link = document.createElement('a');

  link.setAttribute('download', null);
  link.style.display = 'none';

  document.body.appendChild(link);

  for (var i = 0; i < urls.length; i++) {
    link.setAttribute('href', urls[i]);
    link.click();
  }

  document.body.removeChild(link);
}