import chalkAnimation from "chalk-animation";

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
};

const welcome = async () => {
  console.log(`----------------------------------\n`);
  const greetings = chalkAnimation.rainbow(
    `\t Welcome to cli countdown timer!`
  );

  await sleep();
  greetings.stop();
  console.log(`\n----------------------------------\n`);
};

export default welcome;
