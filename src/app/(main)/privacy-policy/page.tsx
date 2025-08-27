import FinalCallout from "@/components/FinalCallout";
import { spacing, typography } from "@/styles/design-tokens";

export default async function PrivacyPolicy() {

	return (
		<>
			<section className={spacing.section}>
				<div className={`${spacing.container} mt-10`}>
					<div className="bg-cream border-4 max-w-screen-lg mx-auto w-full space-y-6 py-10 px-4 sm:px-6 sm:py-12 md:space-y-8 md:px-8 md:py-16 lg:px-20">
						<h2 className={`${typography.h2} text-center`}>Privacy Policy</h2>
						<div className="flex flex-col gap-2">
							<h6 className={typography.h6}>PERSONAL INFORMATION WE COLLECT</h6>
							<p className={typography.body}>
								When you visit the Site, we automatically collect certain
								information about your device, including information about your
								web browser, IP address, time zone, and some of the cookies that
								are installed on your device. Additionally, as you browse the
								Site, we collect information about the individual web pages or
								products that you view, what websites or search terms referred
								you to the Site, and information about how you interact with the
								Site. We refer to this automatically-collected information as
								“Device Information”.
							</p>
						</div>
						<div className="flex flex-col gap-2">
							<h6 className={`${typography.h6} uppercase`}>
								We collect Device Information using the following technologies:
							</h6>
							<ul className="list-disc pl-5 space-y-1">
								<li className={typography.body}>
									“Cookies” are data files that are placed on your device or
									computer and often include an anonymous unique identifier. For
									more information about cookies, and how to disable cookies,
									visit{" "}
									<a
										href="http://www.allaboutcookies.org"
										className={typography.link}
									>
										http://www.allaboutcookies.org
									</a>
									.
								</li>
								<li className={typography.body}>
									“Log files” track actions occurring on the Site, and collect
									data including your IP address, browser type, Internet service
									provider, referring/exit pages, and date/time stamps.
								</li>
								<li className={typography.body}>
									“Web beacons”, “tags”, and “pixels” are electronic files used
									to record information about how you browse the Site.
								</li>
								<li className={typography.body}>
									Additionally, when you make a purchase or attempt to make a
									purchase through the Site, we collect certain information from
									you, including your name, billing address, shipping address,
									payment information including credit card numbers, email
									address, and phone number. We refer to this information as
									“Order Information”.
								</li>
							</ul>
						</div>
						<div className="flex flex-col gap-2">
							<h6 className={typography.h6}>
								HOW DO WE USE YOUR PERSONAL INFORMATION?
							</h6>
							<p className={typography.body}>
								We use the Order Information that we collect generally to
								fulfill any orders placed through the Site (including processing
								your payment information, arranging for shipping, and providing
								you with invoices and/or order confirmations). Additionally, we
								use this Order Information to:
							</p>
							<ul className="list-disc pl-5 space-y-1">
								<li className={typography.body}>Communicate with you,</li>
								<li className={typography.body}>
									Screen our orders for potential risk or fraud; and
								</li>
								<li className={typography.body}>
									When in line with the preferences you have shared with us,
									provide you with information or advertising relating to our
									products or services.
								</li>
							</ul>
							<p className={typography.body}>
								We use the Device Information that we collect to help us screen
								for potential risk and fraud (in particular, your IP address),
								and more generally to improve and optimize our Site (for
								example, by generating analytics about how our customers browse
								and interact with the Site, and to assess the success of our
								marketing and advertising campaigns).
							</p>
						</div>
						<div className="flex flex-col gap-2">
							<h6 className={typography.h6}>
								SHARING YOUR PERSONAL INFORMATION
							</h6>
							<p className={typography.body}>
								We share your Personal Information with third parties to help us
								use your Personal Information, as described above. For example,
								we use Shopify to power our online store–you can read more about
								how Shopify uses your Personal Information here:{" "}
								<a
									href="https://www.shopify.com/legal/privacy"
									className={typography.link}
								>
									https://www.shopify.com/legal/privacy
								</a>
								. We also use Google Analytics to help us understand how our
								customers use the Site — you can read more about how Google uses
								your Personal Information here:{" "}
								<a
									href="https://www.google.com/intl/en/policies/privacy/"
									className={typography.link}
								>
									https://www.google.com/intl/en/policies/privacy/
								</a>
								. You can also opt-out of Google Analytics here:{" "}
								<a
									href="https://tools.google.com/dlpage/gaoptout"
									className={typography.link}
								>
									https://tools.google.com/dlpage/gaoptout
								</a>
								.
							</p>
							<p className={typography.body}>
								Finally, we may also share your Personal Information to comply
								with applicable laws and regulations, to respond to a subpoena,
								search warrant or other lawful request for information we
								receive, or to otherwise protect our rights.
							</p>
						</div>
						<div className="flex flex-col gap-2">
							<h6 className={typography.h6}>BEHAVIORAL ADVERTISING</h6>
							<p className={typography.body}>
								As described above, we use your Personal Information to provide
								you with targeted advertisements or marketing communications we
								believe may be of interest to you. For more information about
								how targeted advertising works, you can visit the Network
								Advertising Initiative’s (“NAI”) educational page at{" "}
								<a
									href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work"
									className={typography.link}
								>
									http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work
								</a>
								.
							</p>
							<p className={typography.body}>
								You can opt out of targeted advertising by using the links
								below:
							</p>
							<ul className="list-disc pl-5 space-y-1">
								<li className={typography.body}>
									Facebook:{" "}
									<a
										href="https://www.facebook.com/settings/?tab=ads"
										className={typography.link}
									>
										https://www.facebook.com/settings/?tab=ads
									</a>
								</li>
								<li className={typography.body}>
									Google:{" "}
									<a
										href="https://www.google.com/settings/ads/anonymous"
										className={typography.link}
									>
										https://www.google.com/settings/ads/anonymous
									</a>
								</li>
								<li className={typography.body}>
									Bing:{" "}
									<a
										href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads"
										className={typography.link}
									>
										https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
									</a>
								</li>
							</ul>
						</div>
						<div className="flex flex-col gap-2">
							<h6 className={typography.h6}>DATA RETENTION</h6>
							<p className={typography.body}>
								When you place an order through the Site, we will maintain your
								Order Information for our records unless and until you ask us to
								delete this information.
							</p>
						</div>
						<div className="flex flex-col gap-2">
							<h6 className={typography.h6}>CHANGES</h6>
							<p className={typography.body}>
								We may update this privacy policy from time to time in order to
								reflect, for example, changes to our practices or for other
								operational, legal or regulatory reasons.
							</p>
						</div>
						<div className="flex flex-col gap-2">
							<h6 className={typography.h6}>CONTACT US</h6>
							<p className={typography.body}>
								For more information about our privacy practices, if you have
								questions, or if you would like to make a complaint, please
								contact us by e mail at{" "}
								<a
									href="mailto:info@milkandcookiesfestival.com"
									className={typography.link}
								>
									info@milkandcookiesfestival.com
								</a>
							</p>
						</div>
					</div>
				</div>
			</section>
			<FinalCallout />
		</>
	);
}
