HTMLWidgets.widget({

  name: 'cartographer',

  type: 'output',

  initialize: function(el, width, height) {

    return {
      // TODO: add instance fields as required
    }

  },

  renderValue: function(el, x, instance) {

    // Debugging
    globaldata = x;

    var div = d3.select("#" + el.id)
      .append("div")
      .style("width", "100%")
      .style("height", "100%")
      .style("position", "relative")
      .classed("map", true);

    var map = d3.carto.map();
    div.call(map);
    //Playing with projections
    map.mode("projection");
    map.projection(d3.geo.albersUsa());

    parseLayers(x, map);

    globalmap = map;

  },

  resize: function(el, width, height, instance) {

  }

});
