package hello;

public class Persoana {

    private final long varsta;
    private final String nume;

    public Persoana(long varsta, String nume) {
        this.varsta = varsta;
        this.nume = nume;
    }

    public long getVarsta() {
        return varsta;
    }

    public String getNume() {
        return nume;
    }
}