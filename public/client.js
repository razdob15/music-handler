  const button = document.getElementById('setVolume');
  const volumeInput = document.getElementById('volume');
  button.addEventListener('click', function (e) {

    let volumeVal = volume.value;
    if (volumeVal <= 20) {
      console.log("LOWWW");
      axios({
        method: 'post',
        url: '/setvolume/',
        data: {
          volume: volumeVal,
        }
      });
    } else {
      console.log("HIGH");
    }
  });