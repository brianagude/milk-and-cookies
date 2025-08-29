import FinalCallout from "@/components/FinalCallout";
import LegalComponent from "@/components/LegalComponent";
import { spacing, typography } from "@/styles/design-tokens";

export default async function PrivacyPolicy() {
	return (
		<>
			<section className={spacing.section}>
				<div className={`${spacing.container} mt-10`}>
					<div className="bg-cream border-4 max-w-screen-lg mx-auto w-full space-y-6 py-10 px-4 sm:px-6 sm:py-12 md:space-y-8 md:px-8 md:py-16 lg:px-20">
						<h2 className={`${typography.h3} text-center`}>Privacy Policy</h2>
						<LegalComponent/>
					</div>
				</div>
			</section>
			<FinalCallout />
		</>
	);
}
