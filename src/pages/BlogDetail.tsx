import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Calendar, Clock, ArrowLeft, ArrowRight, ChevronRight, Tag } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getPostBySlug, getRelatedPosts, getAdjacentPosts } from "@/data/blogPosts";

/* ─── Simple markdown-like renderer ─────────────────────────────────────── */
function renderContent(raw: string): React.ReactNode[] {
  const lines = raw.trim().split("\n");
  const nodes: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) { nodes.push(<div key={key++} className="h-3" />); continue; }

    if (line.startsWith("### ")) {
      nodes.push(
        <h3 key={key++} className="mt-8 mb-3 text-xl font-bold text-foreground">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      nodes.push(
        <h2 key={key++} className="mt-10 mb-4 text-2xl md:text-3xl font-bold text-foreground">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      // Standalone bold line (used as sub-heading)
      nodes.push(
        <p key={key++} className="mt-5 mb-1 font-semibold text-foreground">
          {line.slice(2, -2)}
        </p>
      );
    } else {
      // Inline bold within a paragraph line
      const parts = line.split(/(\*\*[^*]+\*\*)/g).map((part, pi) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={pi}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });
      nodes.push(
        <p key={key++} className="mb-0 text-base text-muted-foreground leading-relaxed">
          {parts}
        </p>
      );
    }
  }

  return nodes;
}

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getPostBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!post) {
    return (
      <PageShell>
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link to="/blog">← Back to Blog</Link>
          </Button>
        </div>
      </PageShell>
    );
  }

  const related = getRelatedPosts(post);
  const { prev, next } = getAdjacentPosts(post);

  return (
    <PageShell>
      {/* ── Hero banner ── */}
      <section className="relative bg-gradient-hero text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(at 30% 20%, oklch(0.78 0.14 78 / 0.25), transparent 55%)",
          }}
        />
        <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-gold/10 blur-3xl animate-float" />

        {/* Breadcrumb */}
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-10">
          <nav className="flex items-center gap-1.5 text-xs text-white/60">
            <Link to="/" className="hover:text-gold transition-smooth">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/blog" className="hover:text-gold transition-smooth">Blog</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-white/40 truncate max-w-[200px]">{post.title}</span>
          </nav>
        </div>

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          {/* Category badge */}
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass text-xs font-semibold text-gold uppercase tracking-widest mb-5">
            <Tag className="h-3 w-3" /> {post.cat}
          </span>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-3xl animate-fade-up">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-white/70 animate-fade-up" style={{ animationDelay: "80ms" }}>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-gold" /> {post.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-gold" /> {post.read} read
            </span>
          </div>
        </div>
      </section>

      {/* ── Featured image ── */}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="rounded-2xl overflow-hidden shadow-glow aspect-[21/9]">
          <img
            src={post.img}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* ── Article body ── */}
      <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="prose-skandha">
          {renderContent(post.content)}
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-2xl bg-gradient-brand text-white p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-2">Ready to Start Your Journey?</h3>
          <p className="text-white/70 text-sm mb-6">
            Talk to our counsellors at Skandha Edu Tech Training Center and find the right course for your goals.
          </p>
          <Button asChild size="lg" className="bg-gradient-gold text-navy-deep">
            <Link to="/contact">Book a Free Counselling Call</Link>
          </Button>
        </div>
      </article>

      {/* ── Prev / Next navigation ── */}
      {(prev || next) && (
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-8">
          <div className="grid sm:grid-cols-2 gap-4 border-t border-border pt-8">
            {prev ? (
              <Link
                to={`/blog/${prev.id}`}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-border hover:border-primary/40 hover-lift transition-smooth"
              >
                <ArrowLeft className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0 group-hover:text-primary transition-smooth" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Previous</p>
                  <p className="text-sm font-semibold leading-snug group-hover:text-primary transition-smooth line-clamp-2">
                    {prev.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                to={`/blog/${next.id}`}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-border hover:border-primary/40 hover-lift transition-smooth sm:flex-row-reverse sm:text-right"
              >
                <ArrowRight className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0 group-hover:text-primary transition-smooth" />
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Next</p>
                  <p className="text-sm font-semibold leading-snug group-hover:text-primary transition-smooth line-clamp-2">
                    {next.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      )}

      {/* ── Related posts ── */}
      {related.length > 0 && (
        <section className="bg-muted/30 py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r) => (
                <Card key={r.id} className="hover-lift border-border overflow-hidden group">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={r.img}
                      alt={r.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 bg-gradient-gold text-navy-deep text-xs font-semibold px-2.5 py-1 rounded-full">
                      {r.cat}
                    </span>
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                      <Calendar className="h-3 w-3" /> {r.date}
                      <span className="mx-1">·</span>
                      <Clock className="h-3 w-3" /> {r.read}
                    </div>
                    <h3 className="text-sm font-semibold leading-snug mb-4 group-hover:text-primary transition-smooth line-clamp-2">
                      {r.title}
                    </h3>
                    <Button
                      asChild
                      size="sm"
                      className="w-full bg-primary text-primary-foreground hover:opacity-90"
                    >
                      <Link to={`/blog/${r.id}`}>
                        Read More <ArrowRight className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to All Articles
                </Link>
              </Button>
            </div>
          </div>
        </section>
      )}
    </PageShell>
  );
}
