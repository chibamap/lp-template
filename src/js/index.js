$(() => {

  $('.accordion').accordion({
    'header': '.head',
    heightStyle: "content",
    collapsible: true
  });

  $('.accordion .close').click((e) => {
    $(e.target).parents('.accordion').accordion('option', "active", false);
  });
});
