import { fireEvent, render,screen } from "@testing-library/react";
import Error from "../components/error";

it("error component'ı hata mesajını gösterir", () => {
    // test edilebilir sahte fonk
    const mockFn = jest.fn();

    // bileşeni renderle
render(<Error info="İnternetiniz çok yavaş" refetch={mockFn}/>);

// hata mesajı ekranda mı?
screen.getByTest("İnternetiniz çok yavaş");

// tekrar dene butonunu al
const button = screen.getByRole("button", {name: "Tekrar Dene" });

// butona tıkla
fireEvent.click(button);

// fonk çağrıldı mı ?
expect(mockFn).toHaveBeenCalled();
});