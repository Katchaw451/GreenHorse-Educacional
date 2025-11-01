#!/bin/bash

# Script de atualização automática
cd ~/Desktop/GreenHorse-Educacional

# Atualizar a data no HTML
sed -i "s/<span id=\"currentDate\">.*<\/span>/<span id=\"currentDate\">$(date +'%d\/%m\/%Y %H:%M')<\/span>/" index.html

# Commit e push automático
git add index.html
git commit -m "Atualização automática: $(date +'%d/%m/%Y %H:%M')"
git push origin main

echo "✅ Atualizado em: $(date)"
