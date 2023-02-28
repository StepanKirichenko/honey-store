import Image from "next/image";

export default function ListScrollArrows() {
  const containerStyle = {
    display: "flex",
    justifyContent: "flex-end",
    gap: "40px",
    marginTop: "50px",
  };

  const arrowStyle = { cursor: "pointer" };

  return (
    <div style={containerStyle}>
      <Image
        src="/images/icons/angle_arrow_left.svg"
        alt="стрелка влево"
        width={15}
        height={25}
        style={arrowStyle}
      />
      <Image
        src="/images/icons/angle_arrow_right.svg"
        alt="стрелка влево"
        width={15}
        height={25}
        style={arrowStyle}
      />
    </div>
  );
}
