package it.codemotion.bookstore.controller;

import it.codemotion.bookstore.autogen.controller.AuthenticationApi;
import it.codemotion.bookstore.autogen.model.AccessToken;
import it.codemotion.bookstore.autogen.model.InlineObject;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.time.OffsetDateTime;
import java.time.ZoneOffset;

@RestController
public class LoginController implements AuthenticationApi {
    @Override
    public ResponseEntity<AccessToken> login(@Valid InlineObject inlineObject) {
        // TODO implement business logic
        AccessToken accessToken = new AccessToken();
        accessToken.setAccessToken("sxhuoiuhafd");
        accessToken.setExpiresAt(OffsetDateTime.of(2100, 11, 11, 11, 11, 11, 11, ZoneOffset.UTC));

        return ResponseEntity.ok(accessToken);
    }
}
