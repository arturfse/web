import "@app/styles/home/23-preview-anim.css";
import { Reveal } from "@shared/ui/anim";
import { ArrowUR } from "@shared/ui/icons";
import { Obf, ObfText } from "@shared/lib/obfuscate";
import { CONTACT, DIRECTORY } from "@entities/home-content/model/contact";

export function Contact() {
  return (
    <Reveal>
        <div className="cta-banner">
          <img
            className="cta-photo"
            src="/artur.webp"
            alt="Artur Arslanov"
            width={640}
            height={640}
            loading="lazy"
          />
          <h2 className="cta-title">Let's talk.</h2>
          <div className="cta-actions">
            <Obf className="btn" d={CONTACT.email} kind="mail">
              <ObfText data={CONTACT.email} />
            </Obf>
            <Obf className="btn-ghost" d={CONTACT.linkedinUrl}>
              Connect on LinkedIn
            </Obf>
          </div>

          <div className="cta-directory">
            {DIRECTORY.map(item => (
              <Obf
                key={item.k}
                d={item.d}
                kind={"kind" in item ? item.kind : "url"}
                className="dir-row"
              >
                <span className="dir-k">{item.k}</span>
                <span className="dir-v">
                  <ObfText data={item.v} />
                  <ArrowUR size={11} />
                </span>
              </Obf>
            ))}
          </div>
        </div>
    </Reveal>
  );
}
