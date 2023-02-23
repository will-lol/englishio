import "solid-js";
import type { JSX } from "solid-js";

interface props extends JSX.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  imgAlt: string;
}

export default function Image(props: props) {
  return (
    <div class="mb-5">
      <img class="mb-2" src={props.imgSrc} alt={props.imgAlt} />
      {props.children}
    </div>
  );
}
