
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-medical-700 mb-6">À propos de RetinaML</h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-medical-600 mb-4">Notre mission</h2>
            <p className="text-gray-700 mb-4">
              RetinaML a été créé avec l'objectif de révolutionner le diagnostic des maladies rétiniennes 
              grâce à l'intelligence artificielle. Notre plateforme permet aux ophtalmologues du monde entier 
              de bénéficier d'outils d'analyse avancés pour améliorer leurs diagnostics et leurs traitements.
            </p>
            <p className="text-gray-700">
              Nous sommes dédiés à l'amélioration des soins oculaires en rendant accessibles les technologies 
              d'intelligence artificielle aux professionnels de santé, indépendamment de leur localisation ou de leurs ressources.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-medical-600 mb-4">Notre équipe</h2>
            <p className="text-gray-700 mb-4">
              Notre équipe multidisciplinaire regroupe des experts en ophtalmologie, en intelligence artificielle, 
              et en développement logiciel. Ensemble, nous travaillons pour créer des solutions innovantes qui répondent 
              aux défis réels rencontrés par les professionnels de la santé oculaire.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {/* Membres de l'équipe - à remplir avec de vraies données */}
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h3 className="font-medium">Dr. Emma Laurent</h3>
                <p className="text-sm text-gray-600">Directrice Médicale</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h3 className="font-medium">Thomas Dubois</h3>
                <p className="text-sm text-gray-600">Directeur Technique</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-4"></div>
                <h3 className="font-medium">Sophie Martin</h3>
                <p className="text-sm text-gray-600">Responsable IA</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-medical-600 mb-4">Notre technologie</h2>
            <p className="text-gray-700">
              RetinaML utilise des algorithmes d'apprentissage profond entraînés sur des millions d'images rétiniennes
              pour détecter avec précision diverses pathologies. Notre plateforme est continuellement améliorée grâce
              aux retours des professionnels et à l'intégration des dernières avancées en intelligence artificielle.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;