import { ReactTerminal } from "react-terminal";
import Signature from "./Signature";

const files: { [key: string]: string } = {
  "README.md": "# James Maguire",
};

function Terminal() {
  const commands = {
    help: (
      <span>
        <strong>clear</strong> - clear the terminal. <br />
        <strong>help</strong> - list all available commands. <br />
        <strong>about</strong> - about me.
      </span>
    ),
    about: () => {
      const id = crypto.randomUUID();

      return (
        <span key={id}>
          <br />
          James Maguire - Software Engineer at{" "}
          <a href="https://moia.io" target="_blank" style={{ color: "white" }}>
            MOIA
          </a>
          . <br />
          <div style={{ position: "relative", zIndex: "1" }}>
            <a
              href="https://github.com/jvm986"
              target="_blank"
              style={{ color: "white" }}
            >
              Github
            </a>{" "}
            |{" "}
            <a
              href="https://www.linkedin.com/in/james-maguire-6b22523a/"
              target="_blank"
              style={{ color: "white" }}
            >
              {" "}
              LinkedIn{" "}
            </a>{" "}
          </div>
          <br />
          <div style={{ position: "relative", marginTop: "-35px" }}>
            <div
              style={{
                position: "absolute",
                top: "55px",
                width: "210px",
                height: "1px",
                backgroundColor: "white",
              }}
            ></div>
            <div style={{ zIndex: "0" }}>
              <Signature id={id} size={200} />
            </div>
          </div>
        </span>
      );
    },
    ls: () => {
      return Object.keys(files).join(" ");
    },
    cat: (args: string) => {
      return files[args] || `file not found: ${args[0]}`;
    },
  };

  const welcomeMessage = (
    <span>
      Type "help" for all available commands. <br />
    </span>
  );

  return (
    <ReactTerminal
      prompt="$"
      theme="material-dark"
      showControlButtons={false}
      welcomeMessage={welcomeMessage}
      commands={commands}
      defaultHandler={(command: string) => {
        return `command not found: ${command}`;
      }}
    />
  );
}

export default Terminal;
