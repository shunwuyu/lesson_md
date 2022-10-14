const program = require('commander');
const images = require('images');
const package = require('./package.json');

program.version(package.version);

const mergeAction = options => {
  const { background, flag, target } = options;
  // console.log(background, flag, target);
  const bg_image = images(background);
  // console.log(bg_image);
  const gq_image = images(flag);
  const offset = { x: 5, y: 5 };
  console.log(gq_image.width(), gq_image.height());
  const foreground_image = images(gq_image.width() + offset.x, gq_image.height() + offset.y).fill(0xff, 0xff, 0xff, 1).draw(gq_image, offset.x, offset.y);
  const pos = {
    x: bg_image.width() - gq_image.width(),
    y: bg_image.height() - gq_image.height(),
  };
  bg_image.draw(foreground_image, pos.x, pos.y).save(target, { quality: 100 });
};

program.command('merge')
  .description('合并图片')
  .option('-b, --background <background image>', '背景图片')
  .option('-f, --flag <flag image>', '国旗图片')
  .option('-t, --target <target image name>', '合成图片')
  .action(mergeAction);

program.parse(process.argv);