import {render,screen} from "@testing-library/react";
import Item from "../pages/home/item";

// Normal şartlarda bir bileşeni kullanırken hangi propları gönderiyorsak test ederkende, normalde gönderdiğimiz değerler benzer propları göndermeliyiz
test("Gönderilen proplar doğru şekilde kullanılır", () => {
    // test edilecek bileşeni renderla
    render(<Item color="text-blue-500" text="Toplam Test" value="256M" />);

// ıcon elementini al
const icon = screen.getByTestId("icon");

// color propu ile gelen değer iconun clasında var mı?
expect(icon).toHaveClass("text-blue-500");

//? text içeriklerini kontrol ederken iki ihtimal ver

//1) önce elementi çağır ardından textine bak
const h2 = screen.getByRole("heading");
expect(h2).toHaveTextContent("256M");

//2) elementi textine göre çagır
screen.getByText("Toplam Test");

});

