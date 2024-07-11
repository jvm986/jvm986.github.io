import { ReactTerminal } from "react-terminal";

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
    about: (
      <span>
        James Maguire - Software Engineer at{" "}
        <a href="https://moia.io" target="_blank">
          MOIA
        </a>
        . <br />
        <a href="https://github.com/jvm986" target="_blank">
          Github
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/james-maguire-6b22523a/"
          target="_blank"
        >
          {" "}
          LinkedIn{" "}
        </a>{" "}
        <br />
      </span>
    ),
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
