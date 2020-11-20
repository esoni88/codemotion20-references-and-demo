package it.codemotion.bookstore.controller;

import it.codemotion.bookstore.autogen.controller.BookApi;
import it.codemotion.bookstore.autogen.model.Author;
import it.codemotion.bookstore.autogen.model.Book;
import it.codemotion.bookstore.autogen.model.BookGenre;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@RestController
public class BookController implements BookApi {
    @Override
    public ResponseEntity<Book> addBook(@Valid Book book) {
        // TODO implement business logic
        book.setId(1L);
        return ResponseEntity.ok(book);
    }

    @Override
    public ResponseEntity<List<Book>> findBooks(@NotNull @Min(0) @Valid Integer offset, @NotNull @Min(1) @Max(100) @Valid Integer limit, @Valid BookGenre genre, @Size(max = 50) @Valid String search) {
        // TODO implement business logic
        Author author = new Author();
        author.setBirthYear(LocalDate.of(2000, 11, 4));
        author.setCountry("Italy");
        author.setFullname("Marco Rossi");
        author.setGender(Author.GenderEnum.MALE);

        List<Book> books = new ArrayList<>();

        Book book1 = new Book();
        book1.setId(1L);
        book1.setAuthor(author);
        book1.setGenre(BookGenre.FANTASY);
        book1.setPublishingHouse("Mondadori");
        book1.setTitle("Il signore magico");
        book1.setTotalPages(1020);

        books.add(book1);

        return ResponseEntity.ok(books);
    }
}
