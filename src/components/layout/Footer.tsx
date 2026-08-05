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
            <h2 id="footer-title" className="site-footer__brand">{siteConfig.name}</h2>
            <Paragraph>Community-led action for a more connected, compassionate future.</Paragraph>
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
              <a className="site-footer__link ds-focus" href="mailto:hello@inamigos.org">hello@inamigos.org</a>
              <span>Contact details coming soon</span>
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
