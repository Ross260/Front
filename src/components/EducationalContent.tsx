
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const EducationalContent = () => {
  return (
    <div id="educational" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-medical-600 font-semibold tracking-wide uppercase">Apprendre</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ressources et Informations
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Découvrez comment l'intelligence artificielle transforme le domaine de l'ophtalmologie.
          </p>
        </div>

        <Tabs defaultValue="ai" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="ai">L'IA en Ophtalmologie</TabsTrigger>
            <TabsTrigger value="guidelines">Recommandations</TabsTrigger>
            <TabsTrigger value="research">Recherche Récente</TabsTrigger>
          </TabsList>
          <TabsContent value="ai">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Intelligence Artificielle et Diagnostic Rétinien</CardTitle>
                  <CardDescription>Comment les algorithmes de deep learning transforment la détection précoce des pathologies</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    L'intelligence artificielle a démontré une efficacité remarquable dans l'analyse d'images médicales, en particulier pour la rétine. Les algorithmes modernes peuvent détecter avec précision:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>La rétinopathie diabétique à ses stades précoces</li>
                    <li>La dégénérescence maculaire liée à l'âge (DMLA)</li>
                    <li>Le glaucome, en analysant la structure du nerf optique</li>
                    <li>Les occlusions veineuses et artérielles de la rétine</li>
                  </ul>
                  <p className="mt-4 text-gray-700">
                    Ces systèmes utilisent principalement des réseaux de neurones convolutifs (CNN) pour identifier des motifs complexes dans les images rétiniennes que même les spécialistes expérimentés peuvent manquer lors d'un examen rapide.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Bénéfices pour la Pratique Clinique</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    L'adoption de l'IA dans la pratique quotidienne offre plusieurs avantages significatifs:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-medical-50 p-4 rounded-lg">
                      <h4 className="font-medium text-medical-700 mb-2">Dépistage à Grande Échelle</h4>
                      <p className="text-sm text-gray-600">Permet d'analyser un grand nombre d'images rapidement, idéal pour les campagnes de dépistage.</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h4 className="font-medium text-teal-700 mb-2">Second Avis</h4>
                      <p className="text-sm text-gray-600">Fournit une confirmation ou signale des anomalies que le praticien pourrait réexaminer.</p>
                    </div>
                    <div className="bg-medical-50 p-4 rounded-lg">
                      <h4 className="font-medium text-medical-700 mb-2">Suivi de Progression</h4>
                      <p className="text-sm text-gray-600">Mesure précisément les changements subtils entre deux examens.</p>
                    </div>
                    <div className="bg-teal-50 p-4 rounded-lg">
                      <h4 className="font-medium text-teal-700 mb-2">Accès aux Soins</h4>
                      <p className="text-sm text-gray-600">Permet une première analyse dans les régions avec peu de spécialistes disponibles.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="guidelines">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recommandations pour les Images</CardTitle>
                  <CardDescription>Comment préparer des images optimales pour l'analyse par IA</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Pour garantir des analyses précises par les algorithmes d'IA, vos images rétiniennes doivent respecter certains critères de qualité:
                  </p>
                  <div className="bg-gray-50 p-5 rounded-lg mt-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Spécifications techniques</h4>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-medical-600">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <span className="text-gray-700">Résolution minimale de 2048×1536 pixels</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-medical-600">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <span className="text-gray-700">Format non compressé ou compression sans perte (TIFF, PNG)</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-medical-600">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <span className="text-gray-700">Champ de vision de 45° ou 60° (préférablement)</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-medical-600">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <span className="text-gray-700">Bon centrage du disque optique et de la macula</span>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-5 w-5 text-medical-600">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div className="ml-3">
                          <span className="text-gray-700">Éclairage uniforme sans réflexions ou artefacts</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Anonymisation des Données</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Avant le partage d'images pour la recherche, l'anonymisation complète est essentielle:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Supprimer toutes les métadonnées DICOM contenant des informations personnelles</li>
                    <li>Éliminer les identifiants patients visibles dans l'image</li>
                    <li>Vérifier l'absence d'informations liées au lieu et à la date d'acquisition</li>
                    <li>Utiliser des outils d'anonymisation dédiés aux images médicales</li>
                  </ul>
                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mt-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-amber-700">
                          Rappel: La réidentification des patients à partir d'images rétiniennes est possible dans certains cas. Une anonymisation rigoureuse est indispensable.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="research">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Publications Récentes</CardTitle>
                  <CardDescription>Une sélection des dernières avancées scientifiques en IA ophtalmologique</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-medium text-gray-900">Deep Learning for Automated Detection of Diabetic Retinopathy: A Meta-Analysis</h4>
                      <p className="text-sm text-gray-500 mt-1">Journal of Medical Imaging, 2023</p>
                      <p className="text-gray-700 mt-3">
                        Cette méta-analyse de 31 études confirme que les algorithmes de deep learning atteignent une sensibilité de 91.2% et une spécificité de 93.7% pour la détection de la rétinopathie diabétique.
                      </p>
                      <a href="#" className="mt-3 inline-flex items-center text-sm font-medium text-medical-600 hover:text-medical-800">
                        Lire le résumé
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1">
                          <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-medium text-gray-900">Multimodal Deep Learning for Combined OCT and Fundus Photography Analysis</h4>
                      <p className="text-sm text-gray-500 mt-1">Nature Digital Medicine, 2024</p>
                      <p className="text-gray-700 mt-3">
                        Cette étude pionnière combine les images de fond d'œil traditionnelles avec la tomographie par cohérence optique (OCT) dans un modèle unifié, améliorant la détection précoce de la DMLA de 23%.
                      </p>
                      <a href="#" className="mt-3 inline-flex items-center text-sm font-medium text-medical-600 hover:text-medical-800">
                        Lire le résumé
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1">
                          <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                    
                    <div className="p-4 border border-gray-200 rounded-lg">
                      <h4 className="font-medium text-gray-900">Federated Learning for Retinal Image Classification: A Multi-Center Study</h4>
                      <p className="text-sm text-gray-500 mt-1">JAMA Ophthalmology, 2024</p>
                      <p className="text-gray-700 mt-3">
                        Cette recherche démontre comment l'apprentissage fédéré permet d'entraîner des modèles d'IA sur des données provenant de multiples centres médicaux sans partager les images originales, préservant ainsi la confidentialité des patients.
                      </p>
                      <a href="#" className="mt-3 inline-flex items-center text-sm font-medium text-medical-600 hover:text-medical-800">
                        Lire le résumé
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-1">
                          <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EducationalContent;
