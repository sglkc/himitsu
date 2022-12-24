export default function Button(props: any) {
  return (
    <button
      {...props}
      className={'py-2 px-4 flex align-center gap-2 rounded-md transition-[background-color] transition-[outline-color] outline outline-2 outline-transparent ' + props.className}
    >
      { props.children }
    </button>
  );
}
