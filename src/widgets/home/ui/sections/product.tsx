import "@app/styles/home/25-product.css";
import { Reveal } from "@shared/ui/anim";
import { ArrowUR } from "@shared/ui/icons";
import { SecHead } from "@widgets/home/ui/components";
import { HtsIllu, PostIllu } from "@widgets/home/ui/illustrations";
import { PRODUCT } from "@entities/home-content/model/product";
import { isWorkWithMeExperiment } from "@entities/home-content/model/experiment";

export function Product() {
  const postCount = PRODUCT.posts.length;
  const sectionNumber = isWorkWithMeExperiment() ? "06" : "05";
  return (
    <div className="shell">
        <SecHead
          num={sectionNumber}
          kicker="Shipping in the open"
          title={<>{PRODUCT.name}<em>{PRODUCT.tld}</em></>}
          meta={[<span className="num">{postCount} post{postCount > 1 ? "s" : ""}</span>, "Live & growing"]}
        />

        <div className="now-wrap">
          <Reveal delay={100}>
            <div className="card card-feature">
              <div className="now-head">
                <div className="now-status">
                  <span className="dot" />{PRODUCT.status}
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>
                  {PRODUCT.tagline}
                </div>
              </div>

              <h3 className="now-title">
                {PRODUCT.headline}<em>{PRODUCT.headlineEm}</em>
              </h3>

            {/*<div className="eyebrow" style={{ width: "fit-content" }}>
                <span className="dot" />A small product, {PRODUCT.italic}
              </div>*/}

              <p className="now-blurb">{PRODUCT.blurb}</p>

              <div className="now-stack">
                {PRODUCT.stack.map(s => <span key={s}>{s}</span>)}
              </div>

              <div className="hts-foot">
                <div className="now-meta">
                  {PRODUCT.meta.map(m => (
                    <span key={m.k}><span className="k">{m.k}</span>{m.v}</span>
                  ))}
                </div>
                <a className="hts-visit" href={PRODUCT.url} target="_blank" rel="noopener noreferrer">
                  Open the site
                  <span className="arr"><ArrowUR size={12} /></span>
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <HtsIllu />
          </Reveal>
        </div>

        <Reveal delay={300} style={{ marginTop: 20 }}>
          <div className="hts-posts">
            <div className="hts-posts-head">
              <h4>Latest posts</h4>
              <span className="hts-posts-sub">One lesson per post - kept short on purpose</span>
            </div>
            <div className="hts-posts-list">
              {PRODUCT.posts.map(p => (
                <a
                  className="hts-post"
                  key={p.num}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="hts-post-illu">
                    <PostIllu topic={p.topic} />
                  </div>
                  <div className="hts-post-main">
                    <div className="hts-post-head">
                      <span className="hts-post-num">{p.num}</span>
                      <span className="hts-post-topic"><span className="dot" />{p.topic}</span>
                      <span className="hts-post-arr"><ArrowUR size={14} /></span>
                    </div>
                    <h3 className="hts-post-title">{p.title}<em>{p.italic}</em></h3>
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
