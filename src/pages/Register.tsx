import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Eye, EyeOff, Mail, User } from "lucide-react";

const Register = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);
const navigate = useNavigate();

const handleRegister = async (e: React.FormEvent) => {
e.preventDefault();

if (!name || !email || !password || !confirmPassword) {
        toast({
        title: "Erreur d'inscription",
        description: "Veuillez remplir tous les champs",
        variant: "destructive",
        });
        return;
}

if (password !== confirmPassword) {
        toast({
        title: "Erreur d'inscription",
        description: "Les mots de passe ne correspondent pas",
        variant: "destructive",
        });
        return;
}

try {
        const response = await fetch("http://localhost:4000/register", { 
        method: "POST",
        headers: {
                "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
});

const data = await response.json();

if (!response.ok) {
        throw new Error(data.message || "Erreur inconnue");
}

toast({
        title: "Inscription réussie",
        description: data.message,
});

navigate("/login");
} catch (error: any) {
        toast({
        title: "Erreur d'inscription",
        description: error.message,
        variant: "destructive",
        });
}
};


const toggleShowPassword = () => {
        setShowPassword(!showPassword);
};

return (
<div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12">
<Card className="w-full max-w-md">
        <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">
        Créer un compte <span className="text-medical-700">Retina<span className="text-teal-600">ML</span></span>
        </CardTitle>
        <CardDescription>
        Inscrivez-vous pour accéder à notre plateforme
        </CardDescription>
        </CardHeader>
        <CardContent>
        <form onSubmit={handleRegister} className="space-y-4">
        <div className="space-y-2">
        <Label htmlFor="name">Nom complet</Label>
        <div className="relative">
                <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                id="name"
                type="text"
                placeholder="Jean Dupont"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="pl-10"
                required
                />
        </div>
        </div>
        <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input
                id="email"
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10"
                required
                />
        </div>
        </div>
        <div className="space-y-2">
        <Label htmlFor="password">Mot de passe</Label>
        <div className="relative">
                <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-10"
                required
                />
                <button
                type="button"
                onClick={toggleShowPassword}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-600"
                >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
        </div>
        </div>
        <div className="space-y-2">
        <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
        <div className="relative">
                <Input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="pr-10"
                required
                />
        </div>
        </div>
        <Button type="submit" className="w-full bg-medical-600 hover:bg-medical-700">
        S'inscrire
        </Button>
        </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
        <div className="text-center text-sm">
        Vous avez déjà un compte?{" "}
        <Link to="/login" className="font-medium text-medical-600 hover:text-medical-700">
        Se connecter
        </Link>
        </div>
        <div className="text-center text-sm text-gray-500">
        <Link to="/" className="font-medium text-gray-600 hover:text-gray-800">
        Retour à l'accueil
        </Link>
        </div>
        </CardFooter>
</Card>
</div>
);
};

export default Register;