/* CASA VOGUE — catalogue (démo). Remplacez librement par vos vraies références. */
(function () {
  "use strict";

  var PRODUCTS = [
    { name: "Régence",     cat: "tissus",   catLabel: "Tissu d'ameublement", matiere: "Velours marine",   price: "54", unit: "/ m", pal: "p-marine",     weave: "w-velours", tag: "Nouveau" },
    { name: "Lubéron",     cat: "tissus",   catLabel: "Tissu d'ameublement", matiere: "Lin lavé",          price: "39", unit: "/ m", pal: "p-lin",        weave: "w-lin",     tag: "" },
    { name: "Toscane",     cat: "tissus",   catLabel: "Tissu d'ameublement", matiere: "Coton damassé",     price: "54", unit: "/ m", pal: "p-ochre",      weave: "w-damas",   tag: "" },
    { name: "Bastide",     cat: "tissus",   catLabel: "Tissu d'ameublement", matiere: "Velours côtelé",    price: "46", unit: "/ m", pal: "p-olive",      weave: "w-velours", tag: "" },

    { name: "Mistral",     cat: "rideaux",  catLabel: "Rideau occultant",    matiere: "Doublure thermique", price: "89", unit: "/ le rideau", pal: "p-bleunuit", weave: "w-lin",   tag: "" },
    { name: "Aurore",      cat: "rideaux",  catLabel: "Voilage",             matiere: "Lin voile",          price: "34", unit: "/ m",         pal: "p-ivoire",   weave: "w-lin",   tag: "Best-seller" },
    { name: "Zéphyr",      cat: "rideaux",  catLabel: "Voilage brodé",       matiere: "Étamine de coton",   price: "42", unit: "/ m",         pal: "p-sable",    weave: "w-pois",  tag: "" },
    { name: "Nocturne",    cat: "rideaux",  catLabel: "Rideau tamisant",     matiere: "Velours occultant",  price: "96", unit: "/ le rideau", pal: "p-prune",    weave: "w-velours", tag: "" },

    { name: "Colonne Laiton", cat: "tringles", catLabel: "Tringle Ø28",      matiere: "Laiton brossé",      price: "79", unit: "/ 200 cm", pal: "p-dore",   weave: "w-rayures", tag: "" },
    { name: "Ligne Noire",    cat: "tringles", catLabel: "Tringle Ø20",      matiere: "Acier mat",          price: "59", unit: "/ 200 cm", pal: "p-bleunuit", weave: "w-rayures", tag: "" },
    { name: "Écru Bois",      cat: "tringles", catLabel: "Tringle bois Ø28", matiere: "Chêne huilé",        price: "68", unit: "/ 200 cm", pal: "p-taupe",   weave: "w-lin",     tag: "Nouveau" },
    { name: "Rail Discret",   cat: "tringles", catLabel: "Rail plafond",     matiere: "Aluminium blanc",    price: "44", unit: "/ 200 cm", pal: "p-ivoire",  weave: "w-rayures", tag: "" },

    { name: "Fauteuil Ondine", cat: "ameublement", catLabel: "Assise",       matiere: "Velours & chêne",    price: "690", unit: "", pal: "p-bordeaux", weave: "w-velours", tag: "" },
    { name: "Banquette Arles", cat: "ameublement", catLabel: "Banc capitonné", matiere: "Lin & pieds laiton", price: "540", unit: "", pal: "p-sage",  weave: "w-lin",     tag: "" },
    { name: "Coussin Garance", cat: "ameublement", catLabel: "Coussin 45×45", matiere: "Velours brodé",     price: "39",  unit: "", pal: "p-rouille",  weave: "w-chevron", tag: "" },
    { name: "Plaid Cévennes",  cat: "ameublement", catLabel: "Plaid laine",   matiere: "Laine mérinos",     price: "89",  unit: "", pal: "p-vertdeau", weave: "w-carreaux", tag: "Nouveau" },

    { name: "Grenade",     cat: "tissus",   catLabel: "Tissu d'ameublement", matiere: "Jacquard fleuri",   price: "62", unit: "/ m", pal: "p-bordeaux", weave: "w-damas",  tag: "" },
    { name: "Camargue",    cat: "tissus",   catLabel: "Tissu d'extérieur",   matiere: "Toile enduite",     price: "37", unit: "/ m", pal: "p-vertdeau", weave: "w-rayures", tag: "" },
    { name: "Perle",       cat: "rideaux",  catLabel: "Voilage",             matiere: "Organza",           price: "29", unit: "/ m", pal: "p-ivoire",   weave: "w-pois",   tag: "" },
    { name: "Embrasse Torsade", cat: "tringles", catLabel: "Accessoire",     matiere: "Cordon & gland",    price: "24", unit: "/ paire", pal: "p-ochre", weave: "w-chevron", tag: "" }
  ];

  var grid = document.querySelector("[data-catalogue]");
  if (!grid) return;

  var render = function (filter) {
    grid.innerHTML = PRODUCTS
      .filter(function (p) { return filter === "all" || p.cat === filter; })
      .map(function (p, i) {
        var tag = p.tag
          ? '<span class="tag' + (p.tag === "Nouveau" ? " new" : "") + '">' + p.tag + "</span>"
          : "";
        var unit = p.unit ? '<small>' + p.unit + "</small>" : "";
        return (
          '<article class="product" data-reveal data-delay="' + (i % 4) + '">' +
            '<div class="thumb">' + tag +
              '<div class="swatch ' + p.pal + " " + p.weave + '"></div>' +
            "</div>" +
            '<div class="body">' +
              '<span class="cat">' + p.catLabel + "</span>" +
              "<h3>" + p.name + "</h3>" +
              '<span class="matiere">' + p.matiere + "</span>" +
              '<div class="foot">' +
                '<span class="price">' + p.price + " € " + unit + "</span>" +
                '<button class="fav" type="button" aria-label="Ajouter aux favoris">♡ Garder</button>' +
              "</div>" +
            "</div>" +
          "</article>"
        );
      })
      .join("");

    // Re-arm reveal for freshly injected cards
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      }, { threshold: 0.1 });
      grid.querySelectorAll("[data-reveal]").forEach(function (el) { io.observe(el); });
    } else {
      grid.querySelectorAll("[data-reveal]").forEach(function (el) { el.classList.add("in"); });
    }
  };

  var bar = document.querySelector("[data-filter]");
  if (bar) {
    bar.addEventListener("click", function (e) {
      var btn = e.target.closest("button[data-cat]");
      if (!btn) return;
      bar.querySelectorAll("button").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      render(btn.getAttribute("data-cat"));
    });
  }

  render("all");
})();
