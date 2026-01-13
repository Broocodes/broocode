export interface Blog {
	_id: string;
	title: string;
	content: string;
	coverImage: {
		publicId: string;
		url: string;
	};
	category: string[];
	likes: string[];
	comments: string[];
	owner: string;
	description: string;
	created_at: string;
	updated_at: string;
}


export const Blogs: Blog[] = [
	{
		_id: "1",
		title: "Top 6 Digital Agency",
		description: "So in this Blog I Show What Actuley is Digital Agency Top in Uttarpradesh add more Creative",
		content: `<h3 style="text-align: left;"><b>&nbsp;10 Best Digital Marketing Agencies in Uttar Pradesh [2025]</b></h3><p>Uttar Pradesh (UP) has emerged as a significant hub for digital marketing, with numerous agencies offering a range of services to enhance online presence and business growth. This document highlights the top digital marketing agencies in UP, known for their exceptional services and innovative strategies that cater to diverse client needs.</p><h1>1. CoolCliq Digital Marketing</h1><p>CoolCliq Digital Marketing has quickly risen to prominence in the digital marketing landscape. They focus on innovative strategies and personalized marketing solutions to help businesses achieve their goals. Their services include SEO, social media management, and content marketing, making them a top choice for businesses looking to enhance their online presence.</p><h1>2. eSearch Logix Technologies</h1><p>eSearch Logix Technologies is a premier Google partner company offering comprehensive internet marketing services. They utilize advanced technologies and agile methodologies to drive business growth, specializing in areas such as SEO, SEM, and social media marketing.</p><h1>3. Digital Jugglers</h1><p>Based in Lucknow, Digital Jugglers is a full-service digital marketing company passionate about discovering what lies at the heart of great businesses. They offer a unified approach to digital branding and marketing strategy, leveraging their expertise to benefit clients.</p><h1>4. Better Graph</h1><p>Better Graph helps businesses revitalize their digital strategies with innovative online advertising solutions. They ideate new strategies and implement various advertising plans to enhance online visibility and engagement.</p><h1>5. MoxiWeb</h1><p>MoxiWeb is a professional digital branding firm with over six years of experience, having catered to more than 4,850 customers. They are recognized for their expertise in digital branding and marketing services, including web design and development.</p><h1>6. BrandBurp Digital</h1><p>BrandBurp Digital is a leading advertising and marketing agency that has assisted over 2,000 brands in enhancing their business growth. Their core services include SEO, PPC, and app advertising, tailored to meet diverse client needs.</p><p>These agencies have established themselves as leaders in the digital marketing landscape of Uttar Pradesh, offering tailored solutions to meet the unique needs of businesses across various industries.</p>`,
		coverImage: {
			publicId: "sample-id",
			url: "https://cdn.dribbble.com/userupload/15952804/file/original-6ce78ab3587e12f6edf6be9bb929565a.jpg?resize=1024x768&vertical=center"
		},
		category: ["Agency"],
		likes: [],
		comments: [],
		owner: "BrooCode Team",
		created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
		updated_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString()
	},
	{
		_id: "2",
		title: "10 Marketing Blogs for India Industry News and Trends—2025 List",
		description: "Explore these marketing blogs to stay updated on the latest industry news and trends in India for 2025.",
		content: `<h3><b>10 Marketing Blogs for India Industry News and Trends—2025 List</b></h3>
    <p>Marketing blogs can be an excellent resource for professionals looking for the most current tips and takes on the marketing industry. Much like the industry itself, marketing blogs may cover various topics whilst focusing on various points of the customer journey.</p>
    <p>Below, we've outlined 10 marketing blogs (and a few honourable mentions) that offer high-quality and relevant content for a well-defined audience, are updated regularly, feature attractive and user-friendly designs, are easily found on search engines, and are well-regarded by industry experts.</p>
    <h4>1. Marketing basics blog: HubSpot Marketing Blog</h4>
    <p><b>Good for:</b> People looking to build a marketing strategy</p>
    <p>The HubSpot Marketing Blog is full of approachable how-tos and explainers geared towards professionals building their marketing strategy, campaign, or team. Updated semi-regularly, this site is full of resources to help maximise your team's efforts and general knowledge base.</p>
    <h4>2. Marketing news blog: Campaign</h4>
    <p><b>Good for:</b> People who like to be the first to know about marketing news</p>
    <p>Campaign is a news blog covering advertising, marketing, and digital marketing. It offers an opinion section and news about events and awards. It has a news site layout with dropdown menus and a search function, making finding information on specific topics easy.</p>
    <h4>3. Marketing industry blog: AdGully</h4>
    <p><b>Good for:</b> People seeking current marketing campaign and industry news and analysis</p>
    <p>AdGully explores all aspects of marketing and advertising, offering a wide range of topics of interest to India and internationally. It hosts its own events, bringing many industries together throughout the year.</p>`,
		coverImage: {
			publicId: "coursera-marketing-blogs-2025",
			url: "https://cdn.dribbble.com/userupload/16628783/file/original-97c54ce819996b762eee022b33df75a2.png?resize=1024x768&vertical=center"
		},
		category: ["Marketing"],
		likes: [],
		comments: [],
		owner: "BrooCode Team",
		created_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
		updated_at: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString()
	},
	{
		_id: "3",
		title: "How to Choose the Right Digital Agency for Your Business in 2025",
		description: "A comprehensive guide to selecting the perfect digital agency that aligns with your business goals and budget.",
		content: `<h2><b>How to Choose the Right Digital Agency for Your Business in 2025</b></h2>
    <p>Selecting the right digital agency is crucial for your business's online success. With countless agencies claiming to be the best, how do you make the right choice? This guide will walk you through the essential factors to consider.</p>
    <h3>1. Define Your Goals and Budget</h3>
    <p>Before you start searching, clearly define what you want to achieve. Are you looking for website development, SEO services, social media management, or a complete digital transformation? Set a realistic budget that aligns with your business size and goals.</p>
    <h3>2. Evaluate Their Portfolio and Case Studies</h3>
    <p>A strong portfolio demonstrates an agency's capabilities. Look for case studies that show measurable results. Check if they've worked with businesses similar to yours and achieved success in your industry.</p>
    <h3>3. Check Their Expertise and Services</h3>
    <p>Ensure the agency offers the services you need. Whether it's web development, app creation, digital marketing, or custom software solutions, verify they have the expertise in your required areas.</p>
    <h3>4. Communication and Transparency</h3>
    <p>Good communication is key to a successful partnership. During initial consultations, assess how well they understand your needs and how transparent they are about processes, timelines, and pricing.</p>
    <h3>5. Technology Stack and Innovation</h3>
    <p>In 2025, technology evolves rapidly. Choose an agency that stays updated with the latest tools and technologies. They should be able to recommend modern solutions that give you a competitive edge.</p>
    <h3>6. Reviews and Testimonials</h3>
    <p>Read client reviews and testimonials. Reach out to past clients if possible to get honest feedback about their experience working with the agency.</p>
    <p>By following these steps, you'll be well-equipped to choose a digital agency that can drive your business forward in the digital landscape.</p>`,
		coverImage: {
			publicId: "choose-digital-agency",
			url: "https://cdn.dribbble.com/userupload/32296481/file/original-f4e16c755fb54fd64e6996e68579c6e6.png?resize=1024x800&vertical=center"
		},
		category: ["Strategy", "Agency"],
		likes: [],
		comments: [],
		owner: "BrooCode Team",
		created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
		updated_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString()
	},
	{
		_id: "4",
		title: "The Future of Web Development: Trends to Watch in 2025",
		description: "Explore the latest web development trends that will shape the digital landscape in 2025 and beyond.",
		content: `<h2><b>The Future of Web Development: Trends to Watch in 2025</b></h2>
    <p>Web development continues to evolve at a rapid pace. As we move through 2025, several trends are shaping how websites are built and experienced. Here are the key trends every business owner and developer should know.</p>
    <h3>1. AI-Powered Development</h3>
    <p>Artificial Intelligence is revolutionizing web development. From AI-assisted coding to intelligent chatbots and personalized user experiences, AI is becoming an integral part of modern web applications.</p>
    <h3>2. Progressive Web Apps (PWAs)</h3>
    <p>PWAs combine the best of web and mobile apps, offering offline functionality, push notifications, and app-like experiences. They're becoming the standard for businesses looking to provide seamless user experiences across devices.</p>
    <h3>3. Serverless Architecture</h3>
    <p>Serverless computing is gaining traction, allowing developers to build and run applications without managing servers. This approach offers scalability, cost-effectiveness, and faster deployment times.</p>
    <h3>4. Headless CMS</h3>
    <p>Headless CMS solutions are on the rise, providing flexibility to deliver content across multiple platforms. This architecture separates content management from presentation, enabling more dynamic and flexible websites.</p>
    <h3>5. Enhanced Security Measures</h3>
    <p>With increasing cyber threats, security is paramount. Modern web development emphasizes security-first approaches, including regular updates, encryption, and compliance with data protection regulations.</p>
    <h3>6. Performance Optimization</h3>
    <p>Page speed and performance remain critical. Developers are focusing on Core Web Vitals, lazy loading, code splitting, and other optimization techniques to ensure fast, responsive websites.</p>
    <p>Staying ahead of these trends ensures your web presence remains competitive and provides the best possible experience for your users.</p>`,
		coverImage: {
			publicId: "web-dev-trends-2025",
			url: "https://cdn.dribbble.com/userupload/23531650/file/original-1075a0a98953616197ca3853a27fa1e2.jpg?resize=752x564&vertical=center"
		},
		category: ["Technology", "Web Development"],
		likes: [],
		comments: [],
		owner: "BrooCode Team",
		created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
		updated_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString()
	},
	{
		_id: "5",
		title: "Digital Marketing Strategies That Drive Real Results in 2025",
		description: "Learn proven digital marketing strategies that deliver measurable results and ROI for your business.",
		content: `<h2><b>Digital Marketing Strategies That Drive Real Results in 2025</b></h2>
    <p>In today's competitive digital landscape, having a solid marketing strategy is essential. Here are proven strategies that deliver real, measurable results for businesses of all sizes.</p>
    <h3>1. Content Marketing Excellence</h3>
    <p>Quality content remains king. Create valuable, relevant content that addresses your audience's pain points. Blog posts, videos, infographics, and case studies can establish your authority and drive organic traffic.</p>
    <h3>2. SEO Optimization</h3>
    <p>Search Engine Optimization is fundamental. Focus on keyword research, on-page optimization, technical SEO, and building quality backlinks. Local SEO is especially important for businesses targeting specific geographic areas.</p>
    <h3>3. Social Media Marketing</h3>
    <p>Engage with your audience on platforms where they spend time. Develop a consistent posting schedule, create engaging content, and interact with your followers. Each platform requires a tailored approach.</p>
    <h3>4. Email Marketing Automation</h3>
    <p>Email marketing continues to deliver high ROI. Use automation to send personalized messages, nurture leads, and re-engage customers. Segment your audience for more targeted campaigns.</p>
    <h3>5. Pay-Per-Click (PPC) Advertising</h3>
    <p>PPC campaigns on Google Ads and social media platforms can drive immediate results. Focus on keyword research, compelling ad copy, and landing page optimization to maximize conversions.</p>
    <h3>6. Analytics and Data-Driven Decisions</h3>
    <p>Track your marketing performance using analytics tools. Measure key metrics like traffic, conversions, engagement, and ROI. Use data to refine your strategies and allocate budget effectively.</p>
    <h3>7. Influencer Partnerships</h3>
    <p>Collaborate with influencers who align with your brand values. Authentic partnerships can expand your reach and build trust with new audiences.</p>
    <p>Implementing these strategies requires consistency and continuous optimization. Monitor your results, test different approaches, and adapt based on what works best for your business.</p>`,
		coverImage: {
			publicId: "digital-marketing-strategies",
			url: "https://cdn.dribbble.com/userupload/24740449/file/original-4302effc1d080e710bda1da49d0190e7.png?format=webp&resize=320x240&vertical=center"
		},
		category: ["Marketing", "Strategy"],
		likes: [],
		comments: [],
		owner: "BrooCode Team",
		created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
		updated_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString()
	},
	{
		_id: "6",
		title: "Building a Strong Brand Identity: A Complete Guide for Digital Agencies",
		description: "Discover how to create a compelling brand identity that resonates with your target audience and sets you apart from competitors.",
		content: `<h2><b>Building a Strong Brand Identity: A Complete Guide for Digital Agencies</b></h2>
    <p>A strong brand identity is the foundation of any successful business. It's how your audience perceives you, what makes you memorable, and what sets you apart from competitors. Here's how to build a compelling brand identity.</p>
    <h3>1. Define Your Brand Values and Mission</h3>
    <p>Start by clearly defining what your brand stands for. What are your core values? What's your mission? These elements should guide every decision you make and every piece of content you create.</p>
    <h3>2. Know Your Target Audience</h3>
    <p>Understanding your audience is crucial. Create detailed buyer personas that include demographics, pain points, goals, and preferences. Your brand identity should speak directly to these people.</p>
    <h3>3. Develop Your Visual Identity</h3>
    <p>Your visual identity includes your logo, color palette, typography, and imagery style. These elements should be consistent across all touchpoints and reflect your brand's personality.</p>
    <h3>4. Craft Your Brand Voice</h3>
    <p>Your brand voice is how you communicate with your audience. Is it professional and formal, or casual and friendly? Define your tone and ensure it's consistent in all communications.</p>
    <h3>5. Create a Brand Style Guide</h3>
    <p>Document your brand guidelines in a style guide. This ensures consistency across all marketing materials, whether created in-house or by external partners.</p>
    <h3>6. Build Brand Awareness</h3>
    <p>Consistently apply your brand identity across all channels. From your website to social media, email campaigns to physical materials, maintain consistency to build recognition and trust.</p>
    <h3>7. Monitor and Evolve</h3>
    <p>Brand identity isn't static. Monitor how your audience responds, gather feedback, and be willing to evolve while staying true to your core values.</p>
    <p>A strong brand identity takes time to build, but the investment pays off in customer loyalty, recognition, and long-term success.</p>`,
		coverImage: {
			publicId: "brand-identity-guide",
			url: "https://cdn.dribbble.com/userupload/27937147/file/original-d8e9899a4462a27e2a881f0bb335f383.jpg?format=webp&resize=320x240&vertical=center"
		},
		category: ["Branding", "Creative"],
		likes: [],
		comments: [],
		owner: "BrooCode Team",
		created_at: new Date().toISOString(),
		updated_at: new Date().toISOString()
	}
]
