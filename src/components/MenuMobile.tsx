import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose // Importante para fechar ao clicar no link
} from "@/components/ui/sheet"
import { Button } from "../components/ui/button"
import { Menu } from "lucide-react";
import { useState } from "react";

// Defina os links aqui também ou passe via props
const itemsDoCabecalho = [
    {href: '/', label:'Pagina Inicial'},
    {href: '/blog', label:'Noticias'},
    {href: '/cenarios', label:'Cenários'},
    {href: '/documentos', label:'Documentos'},
]

export default function MenuMobile() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button
                    className="text-black hover:bg-transparent p-2"
                    variant="ghost"
                    size="icon"
                >
                    <Menu className="w-8 h-8" />
                </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[240px] z-[9999] bg-white">
                <SheetHeader className="text-left">
                    <SheetTitle>Menu</SheetTitle>
                    <SheetDescription>Navegue pelo site</SheetDescription>
                </SheetHeader>

                <nav className="flex flex-col gap-4 mt-6">
                    {itemsDoCabecalho.map((item) => (
                        <SheetClose asChild key={item.href}>
                            <a 
                                href={item.href}
                                className="text-lg font-medium hover:text-azul-petroleo hover:underline underline-offset-4 transition-colors"
                            >
                                {item.label}
                            </a>
                        </SheetClose>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
}