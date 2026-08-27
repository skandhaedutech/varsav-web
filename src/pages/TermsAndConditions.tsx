import { PageShell } from "@/components/site/PageShell";
import { Parallax } from "@/components/site/Parallax";

export default function TermsAndConditions() {
  return (
    <PageShell>
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-4">
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-10">Effective Date: 2026</p>

          <Parallax speed={0.05}>
            <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold">1. Introduction</h2>
              <p className="mt-2 text-muted-foreground">
                By enrolling in any course or using services provided by Skandha Edu Tech Training Center, you agree to
                comply with these Terms and Conditions.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">2. Eligibility</h2>
              <p className="mt-2 text-muted-foreground">
                Students must be at least 16 years old or have parental consent and provide accurate registration
                information.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">3. Enrollment</h2>
              <p className="mt-2 text-muted-foreground">
                Enrollment is confirmed only after successful payment and official confirmation from Skandha Edu Tech.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">4. Fees & Refund Policy</h2>
              <p className="mt-2 text-muted-foreground">
                All course fees are non-refundable. Installment and EMI options are available for eligible programs.
                Delayed payments may result in suspension of course access.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">5. Student Responsibilities</h2>
              <p className="mt-2 text-muted-foreground">
                Students must maintain professional conduct and must not share, copy, distribute, or misuse course
                content.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">6. Intellectual Property</h2>
              <p className="mt-2 text-muted-foreground">
                All learning materials, videos, PDFs, projects, and resources remain the intellectual property of
                Skandha Edu Tech Training Center.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">7. Certification</h2>
              <p className="mt-2 text-muted-foreground">
                Certificates are issued only upon successful completion of course requirements and assessments.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">8. Privacy & Data Protection</h2>
              <p className="mt-2 text-muted-foreground">
                Personal information is used solely for educational, payment, communication, and service improvement
                purposes.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">9. Limitation of Liability</h2>
              <p className="mt-2 text-muted-foreground">
                Skandha Edu Tech shall not be liable for indirect damages, employment outcomes, or losses arising from
                the use of its services.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">10. Governing Law</h2>
              <p className="mt-2 text-muted-foreground">
                These Terms are governed by the laws of India and disputes are subject to the jurisdiction of Salem,
                Tamil Nadu.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">11. Contact</h2>
              <p className="mt-2 text-muted-foreground">
                Email: varsavacademy@gmail.com
                <br />
                Phone: +91 94884 40085
                <br />
                Address: 35 Gopal Street, T.Nagar, Chennai, Tamil Nadu 600017
              </p>
            </div>
            </div>
          </Parallax>
        </div>
      </section>
    </PageShell>
  );
}
