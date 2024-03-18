import "./style.css";

const icons = {
  "alert-bubble": "alert-bubble-5a77bd6f772c498733b6b813bf047a31.svg",
  affiliate: "affiliate-24de47717f81fc06bb40d13942199b1b.svg",
  airplane: "airplane-655c9bee995ea6387aff26c3ad5449b0.svg",
  adjust: "adjust-63782422ba38b3d2ff7dd1e2134d8341.svg",
};

interface IconProps {
  type: keyof typeof icons;
  tone?:
    | "inherit"
    | "info"
    | "warning"
    | "caution"
    | "critical"
    | "subdued"
    | "interactive";
}

export function Icon({ type, tone }: IconProps) {
  const classNames = ["icon"];
  if (tone) classNames.push(`tone-${tone}`);

  return (
    <span className={classNames.join(" ")}>
      <svg>
        <use href={`${icons[type]}#icon-id`} />
      </svg>
    </span>
  );
}
