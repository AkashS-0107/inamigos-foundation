import { Link } from "react-router-dom";

import { siteConfig } from "@/app/config";
import { navigationItems, socialLinks } from "@/data";
import { Button, Container, Divider, Input, Paragraph } from "@/components/ui";

/** Global footer containing data-driven site links and non-operational contact placeholders. */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container className="site-footer__container">
        <div className="site-footer__grid">
          <section className="site-footer__intro" aria-labelledby="footer-title">
            <div className="site-footer__brand-wrapper" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <img src="/logo.svg" alt="InAmigos Foundation Logo" width="48" height="48" style={{ height: "3rem", width: "auto" }} />
              <h2 id="footer-title" className="site-footer__brand" style={{ fontSize: "1.25rem", margin: 0 }}>{siteConfig.name}</h2>
            </div>
            <Paragraph>Section 8 Registered Non-Profit • 80G & 12A Certified • CSR-1 Registered • NITI Aayog & ISO 9001:2015 Certified.</Paragraph>
          </section>

          <nav aria-label="Footer quick links">
            <h2 className="site-footer__heading">Quick links</h2>
            <ul className="site-footer__list">
              {navigationItems.map((item) => <li key={item.href}><Link className="site-footer__link ds-focus" to={item.href}>{item.label}</Link></li>)}
            </ul>
          </nav>

          <section aria-labelledby="footer-contact-title">
            <h2 id="footer-contact-title" className="site-footer__heading">Get in touch</h2>
            <address className="site-footer__contact">
              <a className="site-footer__link ds-focus" href="mailto:support@inamigosfoundation.org.in">support@inamigosfoundation.org.in</a>
              <a className="site-footer__link ds-focus" href="tel:+916267309902">+91 626 730 9902</a>
              <span>Ward No. 5, Sipat Ujwal Nagar, Bilaspur, Chhattisgarh 495555</span>
            </address>
          </section>

          <section aria-labelledby="footer-newsletter-title">
            <h2 id="footer-newsletter-title" className="site-footer__heading">Newsletter</h2>
            <Paragraph>Updates and stories are coming soon.</Paragraph>
            <form className="site-footer__newsletter" aria-label="Newsletter sign-up placeholder">
              <label className="visually-hidden" htmlFor="newsletter-email">Email address</label>
              <Input id="newsletter-email" type="email" placeholder="Your email address" disabled />
              <Button type="submit" disabled>Coming soon</Button>
            </form>
          </section>
        </div>

        <Divider className="site-footer__divider" />
        <div className="site-footer__bottom">
          <small>© {currentYear} {siteConfig.name}. All rights reserved.</small>
          <ul className="site-footer__socials" aria-label="Social links">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return <li key={item.label}><a className="site-footer__social ds-focus" href={item.href} aria-label={item.label}><Icon size={19} aria-hidden="true" /></a></li>;
            })}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
