The goal is to transform your existing agency website into a simple, modern Arabic website for the local branch of the National Association of the Holy Quran in Sidi Boudaoui, Kélibia (الفرع المحلي للرابطة الوطنية للقرآن الكريم — سيدي بوضاوي، قليبية).

The website should serve as the association's official digital presence, complementing Facebook and Instagram rather than replacing them. Its purpose is to attract new members, promote Quran memorization and learning, announce classes and events, introduce teachers, and make registration and contact easy.

1. Website concept and identity

9

- Language: Modern Standard Arabic (الفصحى), with Arabic as the default language and right-to-left layout throughout.
- Identity: Faith, knowledge, community, sincerity, and Quran memorization.
- Colors: Green and white from the existing logo, with caramel/gold accents inspired by the Quran book in the center of the logo.
- Style: Welcoming, peaceful, elegant, accessible, and uncluttered. Avoid excessive decoration or a corporate-agency appearance.
- Primary audience: Women, men, children, parents, Quran learners, and people interested in the association's religious and educational activities.
- Technology: Keep the existing React/Next.js website architecture and Sanity CMS integration where applicable, so the association can publish updates without a developer.

2. Recommended website pages

1. الرئيسية — Home

A welcoming introduction, the association's mission, upcoming activities, featured Quran classes, recent videos, and prominent registration and contact buttons.

2. برامجنا وحلقات التحفيظ — Programs

Separate sections for women, men, and children, covering Quran memorization, recitation, revision, and other educational programs offered by the branch.

3. المعلمون والمشرفون — Teachers

Introduce teachers and program supervisors with their names, photos if available, responsibilities, and the classes they oversee.

4. الأنشطة والفعاليات — Activities & Events

Announcements for Quran study sessions, excursions, community gatherings, religious trips, and special events such as Umrah offers when officially organized or promoted by the branch.

5. معرض الصور والفيديوهات — Media Gallery

Short videos, photos, event recaps, memorization activities, achievements, and embedded Facebook or Instagram publications.

6. التسجيل والاتصال بنا — Registration & Contact

Contact details, location, class schedules, a simple registration form, WhatsApp or phone contact, social media links, and a QR code linking directly to the website or registration page.

You can keep these as six navigation destinations, with the most important content displayed directly on the homepage. You do not need a separate page for every class or announcement. 3. Suggested homepage content in Arabic
Use authentic, welcoming Arabic copy rather than generic agency marketing text.

القرآن الكريم نورٌ وهداية
معًا نتعلّم كتاب الله، ونتدبّر آياته، ونسعى إلى العمل به.

الفرع المحلي للرابطة الوطنية للقرآن الكريم بسيدي بوضاوي — قليبية
سجّل في حلقات التحفيظ

اكتشف أنشطتنا

برامجنا القرآنية
للنساء

حلقات الحفظ والمراجعة

للرجال

تعلم القرآن وتجويده

للأطفال

التعلّم والحفظ والتربية

آخر المستجدات
تابعوا مواعيد الحلقات، والإعلانات، والرحلات، والأنشطة، وأبرز إنجازات أبنائنا وبناتنا.

This is a content and design concept, not a live preview of your website. 4. How to use Sanity CMS
Since your website already uses Sanity, the main objective is to make content management easy for the association's administrators.
Sanity content type Purpose
program Quran classes, audience, schedule, location, supervisor and registration status
teacher Teacher name, photo, biography and assigned programs
event Activities, excursions, competitions, trips and registration deadlines
announcement Schedule changes, new classes and important notices
galleryItem Videos, photos and links to social media publications
achievement Memorization milestones, awards and participant achievements
branchSettings Logo, contact details, address, social media and QR destination
The homepage should automatically display featured programs, upcoming events and recent publications from Sanity. Administrators should be able to publish and update content without editing code.

For the QR code, use a single permanent destination, ideally the website homepage or a dedicated registration page. Generate it from the deployed URL, rather than a temporary preview link. 5. Ready-to-use prompt for your existing website
Copy the following prompt into your coding assistant (Windsurf, Cursor, or another development tool) while working in your existing project.
Project: Transform Existing Agency Website into an Arabic Quranic Education Website
Objective
Transform the existing agency website into a modern, welcoming, Arabic-first educational website for:

الفرع المحلي للرابطة الوطنية للقرآن الكريم بسيدي بوضاوي — قليبية

The website must promote Quran memorization, recitation, learning, community activities, and registration for women, men, and children. It should complement the association's Facebook and Instagram presence and make its activities accessible through one official website.

1. Technical constraints

- Inspect the existing project before making changes.
- Preserve the current framework, architecture, routing approach, reusable components, dependencies, deployment configuration, and working features wherever possible.
- Keep the existing Sanity CMS integration and extend its schemas only where necessary.
- Reuse the existing components and page structure when practical, adapting them to the new identity.
- Do not rebuild the project from scratch or introduce unnecessary dependencies.
- Ensure the website remains responsive, accessible, fast, and SEO-friendly.

2. Language and layout

- Arabic must be the default and primary language.
- Use correct Modern Standard Arabic (العربية الفصحى), not Tunisian dialect.
- Implement right-to-left direction consistently across navigation, layouts, forms, cards, buttons, and text.
- Use appropriate Arabic typography, readable font sizes, and comfortable spacing.
- Use clear, respectful, welcoming language suitable for a religious educational association.

3. Visual identity
   The existing logo is green and white, featuring an open Quran book in a caramel-colored tone at its center.

Build the visual identity around:

- Emerald and deep green as primary colors.
- White and warm ivory as background colors.
- Subtle caramel or muted gold accents.
- The existing association logo as the primary branding asset.
- Restrained Islamic geometric patterns and elegant decorative details.
- Authentic, respectful imagery related to Quran learning, books, educational circles, teachers, and community activities.
  The design must feel peaceful, trustworthy, educational, and community-oriented. Avoid excessive ornamentation, flashy animations, generic corporate-agency styling, and unnecessary visual clutter.

4. Website pages and navigation
   Create or adapt the following pages:
1. الرئيسية — Homepage introducing the association, its mission, programs, upcoming events, recent activities, and registration options.
1. من نحن — About the local branch, its mission, objectives, educational approach, and location.
1. برامجنا وحلقات التحفيظ — Programs for women, men, and children, including memorization, revision, recitation, and other programs actually offered.
1. المعلمون والمشرفون — Profiles of teachers and supervisors with their responsibilities and associated programs.
1. الأنشطة والفعاليات — Events, competitions, excursions, community activities, and relevant educational trips.
1. معرض الصور والفيديوهات — Photos, short videos, activity recaps, and embedded Facebook or Instagram publications.
1. التسجيل والاتصال بنا — Registration information, contact details, location, schedules, and contact links.
   Keep navigation simple. Combine less important sections when that improves usability.
1. Homepage sections
   Build the homepage in this order:

- Header with the logo, Arabic navigation, and a prominent registration button.
- Hero section with the association name, a concise mission statement, and calls to action.
- Three program cards: للنساء، للرجال، للأطفال.
- Featured Quran memorization classes with schedules, locations, supervisors, and registration status.
- Upcoming events and announcements.
- Recent activities, photos, and short videos.
- Teachers and supervisors.
- Achievements and community highlights.
- Contact information, location, social media links, and footer.
  Use this Arabic hero copy as the starting point:

Heading: القرآن الكريم نورٌ وهداية

Description: معًا نتعلّم كتاب الله، ونتدبّر آياته، ونسعى إلى العمل به.

Association: الفرع المحلي للرابطة الوطنية للقرآن الكريم بسيدي بوضاوي — قليبية

Primary CTA: سجّل في حلقات التحفيظ

Secondary CTA: اكتشف أنشطتنا 6. Sanity CMS integration
Inspect the existing schemas and queries before modifying them. Reuse compatible schemas and add only the fields needed.

Support structured content for:

- Programs and Quran memorization classes.
- Teachers and supervisors.
- Events and excursions.
- Announcements and schedule changes.
- Photo and video gallery items.
- Achievements and awards.
- Association contact details and social media settings.
  Each program should support its title, description, target audience, schedule, location, supervisor, registration instructions, contact information, and publication status where appropriate.

Each event should support its title, description, date, location, cover image, registration details, and publication status.

Allow administrators to feature selected content on the homepage. Display only published content and clearly distinguish upcoming events from past events.

Preserve existing Sanity project configuration, dataset, API version, and environment variables. Do not expose private tokens or credentials in frontend code. 7. Registration and contact
Provide a simple registration form that collects only necessary information, such as the participant's name, contact number, selected program, and relevant age group when required.

For children, make the registration process parent- or guardian-oriented. Do not publish participant contact details or private information.

Where a backend submission workflow is not already available, use an appropriate existing contact mechanism or clearly configured WhatsApp contact link. Do not display a form that appears to submit successfully without actually sending or storing the information.

Add prominent phone, WhatsApp, map, Facebook, and Instagram links when verified details are available. 8. QR code
Include a small, printable QR code design that matches the green-and-white branding, with a subtle caramel accent.

The QR code should lead to the deployed official website or a dedicated registration page. Use a stable, verified URL and test that the code scans correctly.

Do not generate a QR code pointing to localhost, a development environment, or a temporary preview URL. 9. SEO and performance

- Set Arabic page titles and meaningful meta descriptions.
- Configure canonical URLs and social sharing metadata.
- Use appropriate Arabic headings and semantic HTML.
- Optimize images and loading performance.
- Support mobile devices and accessible navigation.
- Add structured data only when it accurately represents the association and its public information.
- Use descriptive Arabic URLs if compatible with the existing routing configuration.

10. Content integrity
    Use the supplied association information as the basis for the website. Do not invent teachers, schedules, achievements, addresses, class availability, or official claims.

Create realistic placeholder content only where necessary and clearly identify it for replacement before publication.

Use the supplied announcement about the women's Surah Al-Baqarah memorization group as a sample announcement, preserving the provided details until verified by the association.

Represent Umrah offers and travel arrangements as specific announcements or events, not permanent Quran courses. Do not present prices or booking availability as current unless verified. 11. Final implementation requirements
Work directly within the existing codebase. Implement the actual pages, reusable components, Arabic RTL styling, Sanity content integration, and responsive behavior.

After implementation:

- Check every route and navigation link.
- Verify Arabic RTL behavior on desktop and mobile.
- Test Sanity queries, missing images, and empty content states.
- Verify registration and contact actions.
- Test SEO metadata and the QR destination.
- Run the available lint, type-check, and build commands.
- Fix errors introduced by the changes.
  Finish with a concise report describing the files changed, schemas added or updated, configuration required, and any remaining manual tasks.

The result should be a simple, elegant, trustworthy digital home for the association that encourages people to learn, memorize, and engage with the Holy Quran.

My recommendation: keep the website focused on three actions: discover Quran programs, see upcoming activities, and register or contact the branch. Facebook and Instagram can continue to handle frequent updates, while the website provides a permanent, organized, searchable reference for the association.
