import "solid-js";
import { createSignal, Index, JSX } from "solid-js";

interface props extends JSX.HTMLAttributes<HTMLDivElement> {
  paragraphs: Array<Array<string>>;
}

function padNumber(num: number, numOfPlaces: number): string {
  let output = num.toString().padStart(numOfPlaces, "0");
  return output;
}

export default function Passage(props: props) {
  const [paragraphs, setParagraphs] = createSignal(props.paragraphs);
  let counter: number = 0;

  return (
    <div class="relative mb-5 left-9">
      <div class="absolute top-0 bottom-0 -left-9">
        <Index each={paragraphs()}>
          {(paragraph, i) => (
            <p class="text-gray-600">
              <Index each={paragraph()}>
                {(line, i) => {
                  counter++;
                  return (
                    <>
                      {padNumber(counter, 2)} <br />
                    </>
                  );
                }}
              </Index>
            </p>
          )}
        </Index>
      </div>
      <Index each={paragraphs()}>
        {(paragraph, i) => {
          let padding = "";
          if (i == paragraphs().length - 1) {
            padding = "mb-2"
          }

          return(
          <p class={"w-fit indent-8" + " " + padding}>
            <Index each={paragraph()}>
              {(line, i) => {
                if (i == 0) {
                  return (
                    <>
                      <span>{line}</span>
                    </>
                  );
                } else {
                  return (
                    <>
                      <span class="w-full before:content-['\A'] whitespace-pre">
                        {line}{" "}
                      </span>
                    </>
                  );
                }
              }}
            </Index>
          </p>
        )}}
      </Index>
      {props.children}
    </div>
  );
}
