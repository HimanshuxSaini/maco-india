import urllib.request
import re
from html.parser import HTMLParser

class MyHTMLParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.texts = []
        self.in_a = False
        self.current_href = None

    def handle_starttag(self, tag, attrs):
        if tag == 'a':
            self.in_a = True
            for attr in attrs:
                if attr[0] == 'href':
                    self.current_href = attr[1]
        elif tag in ['h1', 'h2', 'h3', 'p', 'li', 'span', 'div']:
            pass

    def handle_endtag(self, tag):
        if tag == 'a':
            self.in_a = False
            self.current_href = None

    def handle_data(self, data):
        text = data.strip()
        if text:
            if self.in_a and self.current_href:
                self.links.append((self.current_href, text))
            else:
                self.texts.append(text)

parser = MyHTMLParser()
html = urllib.request.urlopen('https://www.maco-india.com/').read().decode('utf-8')
parser.feed(html)

print("--- LINKS ---")
for href, text in parser.links:
    print(f"{text} -> {href}")

print("\n--- TEXTS ---")
for text in parser.texts[:50]:
    print(text)
