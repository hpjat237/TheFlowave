import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Develop Fanpages",
          "Create YouTube Content", 
          "Create TikTok Content",
          "Design Brands",
          "Manage Social Media",
          "Design Graphics",
          "Edit Videos", 
          "Develop Websites",
          "Take Photography",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
