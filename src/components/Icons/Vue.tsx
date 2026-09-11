type VueProps = {
  height?: number;
  width?: number;
};

const Vue = (props: VueProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 64}
    height={props.height || 64}
    viewBox="0 0 48 48"
  >
    <title>{"ionicons-v5_logos"}</title>
    <path d="m256 144.03-55.49-96.11h-79.43L256 281.61 390.92 47.92h-79.43L256 144.03z" />
    <path d="M409.4 47.92 256 313.61 102.6 47.92H15.74L256 464.08 496.26 47.92H409.4z" />
  </svg>
);
export default Vue;
