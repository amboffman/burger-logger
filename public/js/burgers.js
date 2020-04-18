$(() => {
  $(".change-sleep").on("click", function () {
    const id = $(this).data("id");
    const newBurger = $(this).data("newburger");

    const burgerState = { value: newBurger };

    $.ajax(`/api/burgers/${id}/devoured`, {
      type: "PUT",
      data: JSON.stringify(burgerState),
      contentType: "application/json; charset=UTF-8",
    }).then(() => {
      location.reload();
    });
  });

  $(".create-form").on("submit", (event) => {
    event.preventDefault();

    const newBurgers = {
      burger_name: $("#burg").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim(),
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurgers,
    }).then(() => {
      location.reload();
    });
  });
});
