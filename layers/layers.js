var wms_layers = [];

var format_Sawahirigasi_2023_0 = new ol.format.GeoJSON();
var features_Sawahirigasi_2023_0 = format_Sawahirigasi_2023_0.readFeatures(json_Sawahirigasi_2023_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawahirigasi_2023_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawahirigasi_2023_0.addFeatures(features_Sawahirigasi_2023_0);
var lyr_Sawahirigasi_2023_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sawahirigasi_2023_0, 
                style: style_Sawahirigasi_2023_0,
                interactive: true,
                title: '<img src="styles/legend/Sawahirigasi_2023_0.png" /> Sawah irigasi_2023'
            });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Sawahirigasiiii_2 = new ol.format.GeoJSON();
var features_Sawahirigasiiii_2 = format_Sawahirigasiiii_2.readFeatures(json_Sawahirigasiiii_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sawahirigasiiii_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sawahirigasiiii_2.addFeatures(features_Sawahirigasiiii_2);
var lyr_Sawahirigasiiii_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sawahirigasiiii_2, 
                style: style_Sawahirigasiiii_2,
                interactive: true,
                title: '<img src="styles/legend/Sawahirigasiiii_2.png" /> Sawah irigasiiii'
            });
var format_lahanterbuka_3 = new ol.format.GeoJSON();
var features_lahanterbuka_3 = format_lahanterbuka_3.readFeatures(json_lahanterbuka_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lahanterbuka_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lahanterbuka_3.addFeatures(features_lahanterbuka_3);
var lyr_lahanterbuka_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_lahanterbuka_3, 
                style: style_lahanterbuka_3,
                interactive: true,
                title: '<img src="styles/legend/lahanterbuka_3.png" /> lahan terbuka'
            });
var format_LADANG_4 = new ol.format.GeoJSON();
var features_LADANG_4 = format_LADANG_4.readFeatures(json_LADANG_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LADANG_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LADANG_4.addFeatures(features_LADANG_4);
var lyr_LADANG_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LADANG_4, 
                style: style_LADANG_4,
                interactive: true,
                title: '<img src="styles/legend/LADANG_4.png" /> LADANG'
            });
var format_tambakk_5 = new ol.format.GeoJSON();
var features_tambakk_5 = format_tambakk_5.readFeatures(json_tambakk_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tambakk_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tambakk_5.addFeatures(features_tambakk_5);
var lyr_tambakk_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tambakk_5, 
                style: style_tambakk_5,
                interactive: true,
                title: '<img src="styles/legend/tambakk_5.png" /> tambakk'
            });
var format_pemukiman_6 = new ol.format.GeoJSON();
var features_pemukiman_6 = format_pemukiman_6.readFeatures(json_pemukiman_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemukiman_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemukiman_6.addFeatures(features_pemukiman_6);
var lyr_pemukiman_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pemukiman_6, 
                style: style_pemukiman_6,
                interactive: true,
                title: '<img src="styles/legend/pemukiman_6.png" /> pemukiman'
            });
var format_perkebunan_7 = new ol.format.GeoJSON();
var features_perkebunan_7 = format_perkebunan_7.readFeatures(json_perkebunan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_perkebunan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_perkebunan_7.addFeatures(features_perkebunan_7);
var lyr_perkebunan_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_perkebunan_7, 
                style: style_perkebunan_7,
                interactive: true,
                title: '<img src="styles/legend/perkebunan_7.png" /> perkebunan'
            });
var format_waduk_8 = new ol.format.GeoJSON();
var features_waduk_8 = format_waduk_8.readFeatures(json_waduk_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_waduk_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waduk_8.addFeatures(features_waduk_8);
var lyr_waduk_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_waduk_8, 
                style: style_waduk_8,
                interactive: true,
                title: '<img src="styles/legend/waduk_8.png" /> waduk'
            });
var format_sungai_9 = new ol.format.GeoJSON();
var features_sungai_9 = format_sungai_9.readFeatures(json_sungai_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_9.addFeatures(features_sungai_9);
var lyr_sungai_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sungai_9, 
                style: style_sungai_9,
                interactive: true,
                title: '<img src="styles/legend/sungai_9.png" /> sungai'
            });
var format_jalanan_10 = new ol.format.GeoJSON();
var features_jalanan_10 = format_jalanan_10.readFeatures(json_jalanan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanan_10.addFeatures(features_jalanan_10);
var lyr_jalanan_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalanan_10, 
                style: style_jalanan_10,
                interactive: true,
                title: '<img src="styles/legend/jalanan_10.png" /> jalanan'
            });
var format_clipsungai_11 = new ol.format.GeoJSON();
var features_clipsungai_11 = format_clipsungai_11.readFeatures(json_clipsungai_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_clipsungai_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_clipsungai_11.addFeatures(features_clipsungai_11);
var lyr_clipsungai_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_clipsungai_11, 
                style: style_clipsungai_11,
                interactive: true,
                title: '<img src="styles/legend/clipsungai_11.png" /> clip sungai'
            });
var format_jalantol_12 = new ol.format.GeoJSON();
var features_jalantol_12 = format_jalantol_12.readFeatures(json_jalantol_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalantol_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalantol_12.addFeatures(features_jalantol_12);
var lyr_jalantol_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalantol_12, 
                style: style_jalantol_12,
                interactive: true,
                title: '<img src="styles/legend/jalantol_12.png" /> jalan tol'
            });

lyr_Sawahirigasi_2023_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_Sawahirigasiiii_2.setVisible(true);lyr_lahanterbuka_3.setVisible(true);lyr_LADANG_4.setVisible(true);lyr_tambakk_5.setVisible(true);lyr_pemukiman_6.setVisible(true);lyr_perkebunan_7.setVisible(true);lyr_waduk_8.setVisible(true);lyr_sungai_9.setVisible(true);lyr_jalanan_10.setVisible(true);lyr_clipsungai_11.setVisible(true);lyr_jalantol_12.setVisible(true);
var layersList = [lyr_Sawahirigasi_2023_0,lyr_GoogleMaps_1,lyr_Sawahirigasiiii_2,lyr_lahanterbuka_3,lyr_LADANG_4,lyr_tambakk_5,lyr_pemukiman_6,lyr_perkebunan_7,lyr_waduk_8,lyr_sungai_9,lyr_jalanan_10,lyr_clipsungai_11,lyr_jalantol_12];
lyr_Sawahirigasi_2023_0.set('fieldAliases', {'id': 'id', 'PL 2019': 'PL 2019', 'luas_ha': 'luas_ha', 'PL 2023': 'PL 2023', 'PERUBAHAN': 'PERUBAHAN', });
lyr_Sawahirigasiiii_2.set('fieldAliases', {'id': 'id', 'PL 2019': 'PL 2019', 'luas_ha': 'luas_ha', 'PL 2023': 'PL 2023', 'PERUBAHAN': 'PERUBAHAN', });
lyr_lahanterbuka_3.set('fieldAliases', {'id': 'id', 'PL 2019': 'PL 2019', 'luas_ha': 'luas_ha', 'PL 2023': 'PL 2023', 'PERUBAHAN': 'PERUBAHAN', });
lyr_LADANG_4.set('fieldAliases', {'id': 'id', 'PL 2019': 'PL 2019', 'Luas_ha': 'Luas_ha', 'PL 2023': 'PL 2023', 'PERUBAHAN': 'PERUBAHAN', });
lyr_tambakk_5.set('fieldAliases', {'id': 'id', 'PL 2019': 'PL 2019', 'luas_ha': 'luas_ha', 'PL 2023': 'PL 2023', 'PERUBAHAN': 'PERUBAHAN', });
lyr_pemukiman_6.set('fieldAliases', {'id': 'id', 'PL 2019': 'PL 2019', 'luas_ha': 'luas_ha', 'PL 2023': 'PL 2023', 'PERUBAHAN': 'PERUBAHAN', });
lyr_perkebunan_7.set('fieldAliases', {'id': 'id', 'PL': 'PL', 'luas_ha': 'luas_ha', });
lyr_waduk_8.set('fieldAliases', {'id': 'id', 'PL 2019': 'PL 2019', 'luas_ha': 'luas_ha', 'PL 2023': 'PL 2023', 'perubahan': 'perubahan', });
lyr_sungai_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_jalanan_10.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_clipsungai_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_jalantol_12.set('fieldAliases', {'id': 'id', 'PL': 'PL', });
lyr_Sawahirigasi_2023_0.set('fieldImages', {'id': 'TextEdit', 'PL 2019': 'TextEdit', 'luas_ha': 'TextEdit', 'PL 2023': '', 'PERUBAHAN': 'TextEdit', });
lyr_Sawahirigasiiii_2.set('fieldImages', {'id': 'TextEdit', 'PL 2019': '', 'luas_ha': 'TextEdit', 'PL 2023': '', 'PERUBAHAN': '', });
lyr_lahanterbuka_3.set('fieldImages', {'id': 'TextEdit', 'PL 2019': '', 'luas_ha': 'TextEdit', 'PL 2023': '', 'PERUBAHAN': '', });
lyr_LADANG_4.set('fieldImages', {'id': 'TextEdit', 'PL 2019': '', 'Luas_ha': 'TextEdit', 'PL 2023': '', 'PERUBAHAN': '', });
lyr_tambakk_5.set('fieldImages', {'id': 'TextEdit', 'PL 2019': '', 'luas_ha': 'TextEdit', 'PL 2023': '', 'PERUBAHAN': '', });
lyr_pemukiman_6.set('fieldImages', {'id': 'TextEdit', 'PL 2019': '', 'luas_ha': 'TextEdit', 'PL 2023': '', 'PERUBAHAN': '', });
lyr_perkebunan_7.set('fieldImages', {'id': 'TextEdit', 'PL': 'TextEdit', 'luas_ha': 'TextEdit', });
lyr_waduk_8.set('fieldImages', {'id': 'TextEdit', 'PL 2019': '', 'luas_ha': 'TextEdit', 'PL 2023': '', 'perubahan': '', });
lyr_sungai_9.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_jalanan_10.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_clipsungai_11.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_jalantol_12.set('fieldImages', {'id': 'TextEdit', 'PL': 'TextEdit', });
lyr_Sawahirigasi_2023_0.set('fieldLabels', {'id': 'no label', 'PL 2019': 'no label', 'luas_ha': 'no label', 'PL 2023': 'no label', 'PERUBAHAN': 'no label', });
lyr_Sawahirigasiiii_2.set('fieldLabels', {'id': 'no label', 'PL 2019': 'no label', 'luas_ha': 'no label', 'PL 2023': 'no label', 'PERUBAHAN': 'no label', });
lyr_lahanterbuka_3.set('fieldLabels', {'id': 'no label', 'PL 2019': 'no label', 'luas_ha': 'no label', 'PL 2023': 'no label', 'PERUBAHAN': 'no label', });
lyr_LADANG_4.set('fieldLabels', {'id': 'no label', 'PL 2019': 'no label', 'Luas_ha': 'no label', 'PL 2023': 'no label', 'PERUBAHAN': 'no label', });
lyr_tambakk_5.set('fieldLabels', {'id': 'no label', 'PL 2019': 'no label', 'luas_ha': 'no label', 'PL 2023': 'no label', 'PERUBAHAN': 'no label', });
lyr_pemukiman_6.set('fieldLabels', {'id': 'no label', 'PL 2019': 'no label', 'luas_ha': 'no label', 'PL 2023': 'no label', 'PERUBAHAN': 'no label', });
lyr_perkebunan_7.set('fieldLabels', {'id': 'no label', 'PL': 'no label', 'luas_ha': 'no label', });
lyr_waduk_8.set('fieldLabels', {'id': 'no label', 'PL 2019': 'no label', 'luas_ha': 'no label', 'PL 2023': 'no label', 'perubahan': 'no label', });
lyr_sungai_9.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_jalanan_10.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_clipsungai_11.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_jalantol_12.set('fieldLabels', {'id': 'no label', 'PL': 'no label', });
lyr_jalantol_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});