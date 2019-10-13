<template>
  <div id="frontSkill">
  </div>
</template>
<script>
import data from "../assets/FrontSkill";
console.log(data);
export default {
  name: "FrontSkill",
  mounted() {
    this.draw()
  },
  methods: {
    draw() {
      var myChart = this.$echarts.init(document.getElementById("frontSkill"));
    var app = {};
    var option = null;

    function colorMappingChange(value) {
      var levelOption = getLevelOption(value);
      chart.setOption({
        series: [
          {
            levels: levelOption
          }
        ]
      });
    }

    var formatUtil = this.$echarts.format;

    function getLevelOption() {
      return [
        {
          itemStyle: {
            normal: {
              borderWidth: 2,
              gapWidth: 4
            }
          },
          upperLabel: {
            normal: {
              show: false
            }
          }
        },
        {
          colorSaturation: [0.35, 0.5],
          itemStyle: {
            normal: {
              borderWidth: 2,
              gapWidth: 3,
              borderColorSaturation: 0.69
            }
          }
        },
        {
          colorSaturation: [0.35, 0.5],
          itemStyle: {
            normal: {
              borderWidth: 2,
              gapWidth: 3,
              borderColorSaturation: 0.62
            }
          }
        },
        {
          colorSaturation: [0.35, 0.5],
          itemStyle: {
            normal: {
              borderWidth: 2,
              gapWidth: 2,
              borderColorSaturation: 0.52
            }
          }
        }
      ];
    }

    myChart.setOption(
      (option = {
        title: {
          text: "JavaScript暸望塔--大前端技能图谱",
          left: "center"
        },

        tooltip: {
          formatter: function(info) {
            var value = info.value;
            var treePathInfo = info.treePathInfo;
            var treePath = [];

            for (var i = 1; i < treePathInfo.length; i++) {
              treePath.push(treePathInfo[i].name);
            }

            return [
              '<div class="tooltip-title">' +
                formatUtil.encodeHTML(treePath.join("/")) +
                "</div>"
            ].join("");
          }
        },

        series: [
          {
            name: "JavaScript暸望塔",
            type: "treemap",
            visibleMin: 300,
            label: {
              show: true,
              formatter: "{b}"
            },
            upperLabel: {
              normal: {
                show: true,
                height: 30
              }
            },
            itemStyle: {
              normal: {
                borderColor: "#fff"
              }
            },
            levels: getLevelOption(),
            data: data
          }
        ]
      })
    );
    }
  }
};
</script>
<style scoped>
#frontSkill {
  width: 100%;
  height: 1000px;
}
</style>