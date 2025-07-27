
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const WebinarSection = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [open, setOpen] = useState(false);
  const [webinarId, setWebinarId] = useState("");

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!email.includes("@") || name.length < 2) {
      toast({
        title: "Erreur de validation",
        description: "Veuillez fournir un email et un nom valides.",
        variant: "destructive",
      });
      return;
    }
    
    // Registration simulation
    toast({
      title: "Inscription réussie!",
      description: "Vous recevrez bientôt un email de confirmation avec les détails de connexion.",
    });
    
    // Reset form and close dialog
    setEmail("");
    setName("");
    setOpen(false);
  };

  const openRegistrationModal = (id: string) => {
    setWebinarId(id);
    setOpen(true);
  };

  const webinars = [
    {
      id: "web1",
      title: "Introduction au Machine Learning pour Ophtalmologistes",
      date: "24 juin 2025",
      time: "14:00 - 15:30",
      speaker: "Dr. Marie Laurent",
      description: "Une introduction accessible aux concepts fondamentaux du machine learning appliqués à l'analyse d'images rétiniennes."
    },
    {
      id: "web2",
      title: "Détection Précoce de la Rétinopathie Diabétique par IA",
      date: "10 juillet 2025",
      time: "16:00 - 17:30",
      speaker: "Dr. Thomas Bernard",
      description: "Présentation des dernières avancées dans les algorithmes de détection automatisée de la rétinopathie diabétique."
    },
    {
      id: "web3",
      title: "Éthique et IA en Ophtalmologie",
      date: "15 septembre 2025",
      time: "13:00 - 14:30",
      speaker: "Prof. Claire Dubois",
      description: "Discussion sur les enjeux éthiques et juridiques de l'utilisation de l'intelligence artificielle en pratique clinique."
    }
  ];

  return (
    <div id="webinars" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-medical-600 font-semibold tracking-wide uppercase">Formation</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Webinaires et Événements
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Rejoignez nos sessions en direct animées par des experts pour approfondir vos connaissances.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {webinars.map((webinar) => (
            <div 
              key={webinar.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all hover:shadow-lg"
            >
              <div className="h-3 bg-gradient-to-r from-medical-500 to-teal-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-medical-100 text-medical-800 text-xs font-medium rounded-full px-3 py-1">
                    Webinaire
                  </div>
                  <div className="ml-2 bg-teal-100 text-teal-800 text-xs font-medium rounded-full px-3 py-1">
                    En ligne
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{webinar.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{webinar.description}</p>
                
                <div className="border-t border-gray-100 pt-4 mt-4">
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-medical-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    {webinar.date} | {webinar.time}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-medical-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    {webinar.speaker}
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button 
                    className="w-full bg-medical-600 hover:bg-medical-700"
                    onClick={() => openRegistrationModal(webinar.id)}
                  >
                    S'inscrire
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Vous avez manqué un webinaire? Accédez à nos enregistrements précédents.
          </p>
          <Button variant="outline" className="border-medical-500 text-medical-600 hover:bg-medical-50">
            Voir les archives
          </Button>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>S'inscrire au webinaire</DialogTitle>
              <DialogDescription>
                Complétez le formulaire ci-dessous pour recevoir le lien de connexion par email.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleRegistration}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Nom
                  </Label>
                  <Input
                    id="name"
                    className="col-span-3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    className="col-span-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" className="bg-medical-600 hover:bg-medical-700">S'inscrire</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default WebinarSection;
