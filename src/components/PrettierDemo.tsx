import { useState } from "react";
import "./PrettierDemo.css";
import { formatCode } from "../utils/formatCode";

export const PrettierDemo = () => {
  const [code, setCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onClickFormatCode = async () => {
    setIsLoading(true);
    try {
      const formatted = await formatCode(code);
      setCode(formatted);
    } catch (e) {
      if (e instanceof Error) setError(e.message);
      console.error(e);
    }
    setIsLoading(false);
  };

  return (
    <div className="math-page">
      <div className="text-center">
        <div className="text-center">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            cols={100}
            rows={10}
            placeholder="Type some Typescript here!"
          ></textarea>
        </div>
        <div style={{ height: 20 }} />
        <button onClick={onClickFormatCode} disabled={isLoading || !code}>
          Format Code
        </button>
      </div>
      <div className="text-red">
        <pre>
          <code>{error}</code>
        </pre>
      </div>
    </div>
  );
};
