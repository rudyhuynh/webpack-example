import "./App.css";

type Props = { text?: string };

export const App = ({ text }: Props) => {
  return (
    <div className="text-center">
      <span className="App1Text">This is App 1. {text}</span>
    </div>
  );
};
