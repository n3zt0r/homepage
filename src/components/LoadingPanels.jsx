import { animated, useSpring } from "@react-spring/web";

function LoadingPanels() {
  const config = {
    from: { width: "100%", height: "100%" },
    to: { width: "0%", height: "100%" },
    reset: true,
  };

  const style1 = useSpring({
    ...config,
    delay: 200,
  });
  const style2 = useSpring({
    ...config,
    delay: 400,
  });
  const style3 = useSpring({
    ...config,
    delay: 600,
  });
  const style4 = useSpring({
    ...config,
    delay: 800,
  });
  const style5 = useSpring({
    ...config,
    delay: 1000,
  });
  const style6 = useSpring({
    ...config,
    delay: 1200,
  });
  const style7 = useSpring({
    ...config,
    delay: 1400,
  });

  return (
    <div className="overflow-hidden">
      <animated.div
        style={style7}
        className={"bg-gray-200 absolute top-0 left-0"}
      />
      <animated.div
        style={style6}
        className={"bg-gray-300 absolute top-0 left-0"}
      />
      <animated.div
        style={style5}
        className={"bg-gray-400 absolute top-0 left-0"}
      />
      <animated.div
        style={style4}
        className={"bg-gray-500 absolute top-0 left-0"}
      />
      <animated.div
        style={style3}
        className={"bg-gray-600 absolute top-0 left-0"}
      />
      <animated.div
        style={style2}
        className={"bg-gray-700 absolute top-0 left-0"}
      />
      <animated.div
        style={style1}
        className={"bg-gray-800 absolute top-0 left-0"}
      />
    </div>
  );
}

export default LoadingPanels;
