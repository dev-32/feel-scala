import React from "react";
import axios from "axios";
import Editor from "@site/src/components/Editor";
import CodeBlock from '@theme/CodeBlock';

const LiveFeel = ({ children, feelContext }) => {
  if (feelContext) {
    // format the context
    feelContext = JSON.stringify(JSON.parse(feelContext), null, 2);
  }

  const [expression, setExpression] = React.useState(children);
  const [context, setContext] = React.useState(feelContext);
  const [result, setResult] = React.useState("");

  function evaluate() {
    const parsedContext = feelContext ? JSON.parse(context) : {};
    axios
      .post(
        "http://34.138.73.115/process/start",
        {
          expression: expression,
          context: parsedContext,
          metadata: {
            user: "foo",
          },
        },
        {
          headers: {
            accept: "*/*",
            "content-type": "application/json",
          },
        }
      )
      .then((response) => {
        setResult(JSON.stringify(response.data));
      });
  }

  return (
    <div>
      <h2>Expression</h2>
      <Editor onChange={setExpression} language="js">{expression}</Editor>

      {feelContext &&
        <div>
          <h2>Context</h2>
          <Editor onChange={setContext} language="json">{context}</Editor>
        </div>
      }

      <button
        onClick={evaluate}
        className="button button--primary button--lg"
      >
        Evaluate
      </button>

      <br/><br/>
      <h2>Result</h2>
      <CodeBlock language="json">
        {result}
      </CodeBlock>
    </div>
  );
};

export default LiveFeel;
