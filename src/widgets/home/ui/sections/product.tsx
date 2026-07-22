import "@app/styles/home/25-product.css";
import { Reveal } from "@shared/ui/anim";
import { ArrowUR } from "@shared/ui/icons";
import { SecHead } from "@widgets/home/ui/components";
import { HowtoshipFig, PostIllu } from "@widgets/home/ui/illustrations";
import { PRODUCT } from "@entities/home-content/model/product";

export function Product() {
  return (
    <div className="shell">
        <SecHead title={<>{PRODUCT.name}<em>{PRODUCT.tld}</em></>} />

        <div className="now-wrap">
          <Reveal delay={100}>
            <div className="card card-feature">
              <div className="now-head">
                <div className="now-status">{PRODUCT.status}</div>
              </div>

              <h3 className="now-title">{PRODUCT.headline}</h3>

              <p className="now-blurb">{PRODUCT.blurb}</p>

              <div className="hts-foot">
                <a className="hts-visit" href={PRODUCT.url} target="_blank" rel="noopener noreferrer">
                  Open the site
                  <span className="arr"><ArrowUR size={12} /></span>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <HowtoshipFig />
          </Reveal>
        </div>

        <Reveal delay={300} style={{ marginTop: 20 }}>
          <div className="hts-posts">
            <div className="hts-posts-head">
              <h4>Latest posts</h4>
            </div>
            <div className="hts-posts-list">
              {PRODUCT.posts.map(p => (
                <a
                  className="hts-post"
                  key={p.href}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="hts-post-illu">
                    <PostIllu topic={p.topic} />
                  </div>
                  <div className="hts-post-main">
                    <div className="hts-post-head">
                      <span className="hts-post-topic">{p.topic}</span>
                      <span className="hts-post-arr"><ArrowUR size={14} /></span>
                    </div>
                    <h3 className="hts-post-title">{p.title}</h3>
                    <p className="hts-post-blurb">{p.blurb}</p>
                    <div className="hts-post-foot">
                      <span>{p.read}</span>
                      <span className="hts-post-read">Read the post</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
    </div>
  );
}
