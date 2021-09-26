$(() => {
  $.featherlight.defaults.closeOnClick = "anywhere";

  $(".download-buttons-linux").hide();
  $(".download-buttons-mac").hide();
  $(".download-buttons-windows").hide();
});

$(".linux-download-btn").click(() => {
  $(".download-buttons-linux").show();
  $(".download-buttons-mac").hide();
  $(".download-buttons-windows").hide();
});

$(".mac-download-btn").click(() => {
  $(".download-buttons-mac").show();
  $(".download-buttons-linux").hide();
  $(".download-buttons-windows").hide();
});

$(".windows-download-btn").click(() => {
  $(".download-buttons-windows").show();
  $(".download-buttons-mac").hide();
  $(".download-buttons-linux").hide();
});
