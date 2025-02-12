const CopyrightFooter = () => {
  return (
    <div className="copyright-text">
      <p>
        © {new Date().getFullYear()} HireZone by{" "}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          HireZone
        </a>
        . All Right Reserved.
      </p>
    </div>
  );
};

export default CopyrightFooter;
