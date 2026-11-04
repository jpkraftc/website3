export default function SiteFooter() {
  return (
    <footer>
      <div className="footer-brand">
        KRAFT <span>ELECTRIC</span>
      </div>
      <div>Licensed &amp; Insured · North Carolina</div>
      <div>© {new Date().getFullYear()} Kraft Electric</div>
    </footer>
  );
}
